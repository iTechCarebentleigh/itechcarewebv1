import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Devices = () => {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedDevice, setSelectedDevice] = useState('');
  const [filteredDevices, setFilteredDevices] = useState([]);

  useEffect(() => {
    // Fetch data from the RepairDesk API using Axios
    const fetchDevices = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_REPAIRDESK_API_KEY; // Access the API key from environment variables
        const response = await axios.get(`https://api.repairdesk.co/api/web/v1/devices`, {
          params: {
            api_key: apiKey
          }
        });

        if (response.data.success) {
          setDevices(response.data.data); // Set all fetched devices
        } else {
          setError('Failed to fetch devices');
        }
      } catch (err) {
        setError('An error occurred while fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchDevices();
  }, []);

  // Update filtered devices based on the selected company
  useEffect(() => {
    if (selectedCompany) {
      const filtered = devices
        .filter(device => device.company === selectedCompany)
        .sort((a, b) => a.name.localeCompare(b.name)); // Sort devices alphabetically by name
      setFilteredDevices(filtered);
      setSelectedDevice(''); // Reset device dropdown when company changes
    }
  }, [selectedCompany, devices]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Get the unique list of companies and sort them alphabetically
  const uniqueCompanies = [...new Set(devices.map(device => device.company))].sort((a, b) => a.localeCompare(b));

  return (
    <div className='p-12 text-lg'>
      <h1>Select Company and Device</h1>

      {/* Dropdown for selecting a company */}
      <div>
        <label htmlFor="company">Select Company:</label>
        <select
          id="company"
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
        >
          <option value="">--Select Company--</option>
          {uniqueCompanies.map(company => (
            <option key={company} value={company}>
              {company}
            </option>
          ))}
        </select>
      </div>

      {/* Dropdown for selecting a device */}
      {selectedCompany && (
        <div>
          <label htmlFor="device">Select Device:</label>
          <select
            id="device"
            value={selectedDevice}
            onChange={(e) => setSelectedDevice(e.target.value)}
          >
            <option value="">--Select Device--</option>
            {filteredDevices.map(device => (
              <option key={device.id} value={device.name}>
                {device.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Display the selected device info */}
      {selectedDevice && (
        <div>
          <h2>Selected Device Information</h2>
          {filteredDevices
            .filter(device => device.name === selectedDevice)
            .map(device => (
              <div key={device.id}>
                <h3>{device.name}</h3>
                <img src={device.image} alt={device.name} width="100" />
                <p>Colors: {device.colors.join(', ')}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Devices;
