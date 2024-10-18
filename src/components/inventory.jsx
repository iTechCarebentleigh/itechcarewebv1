import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Inventory = () => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch inventory items from RepairDesk API using Axios
    const fetchInventoryItems = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_REPAIRDESK_API_KEY; // Access API key from environment variables
        const response = await axios.get('https://api.repairdesk.co/api/web/v1/inventory', {
          params: {
            api_key: apiKey,
          },
        });

        console.log(response.data); // Log the API response to inspect its structure

        if (response.data.success) {
          // Access the inventoryListData array
          const items = response.data.data.inventoryListData;
          setInventoryItems(items); // Set the fetched inventory items
        } else {
          setError('Failed to fetch inventory items');
        }
      } catch (err) {
        setError('An error occurred while fetching the data');
      } finally {
        setLoading(false);
      }
    };

    fetchInventoryItems();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Inventory Items</h1>

      {/* Display list of all inventory items */}
      {inventoryItems.length > 0 ? (
        <ul>
          {inventoryItems.map(item => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>stocks: {item.in_stock}</p>
              <img src={item.image} alt={item.name} width="100" />
            </li>
          ))}
        </ul>
      ) : (
        <p>No inventory items available</p>
      )}
    </div>
  );
};

export default Inventory;
