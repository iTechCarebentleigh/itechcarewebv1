import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Icon, Popover, Card, TextField, Button, DatePicker,Autocomplete } from '@shopify/polaris';
import Link from 'next/link';
import axios from 'axios';
import {Select} from '@shopify/polaris';

const Bookrepair = () => {
    function nodeContainsDescendant(rootNode, descendant) {
        if (rootNode === descendant) {
            return true;
        }
        let parent = descendant.parentNode;
        while (parent != null) {
            if (parent === rootNode) {
                return true;
            }
            parent = parent.parentNode;
        }
        return false;
    }


    const [visible, setVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [{ month, year }, setDate] = useState({
        month: selectedDate.getMonth(),
        year: selectedDate.getFullYear(),
    });
    const visitDate = selectedDate.toISOString().slice(0, 10);
    const datePickerRef = useRef(null);

    function isNodeWithinPopover(node) {
        return datePickerRef?.current
            ? nodeContainsDescendant(datePickerRef.current, node)
            : false;
    }

    const handledeviceValueChange = () => {
    };

    const handleOnClose = ({ relatedTarget }) => {
        setVisible(false);
    };

    const handleMonthChange = (month, year) => {
        setDate({ month, year });
    };

    const handleDateSelection = ({ end: newSelectedDate }) => {
        setSelectedDate(newSelectedDate);
        setVisible(false);
    };

    useEffect(() => {
        if (selectedDate) {
            setDate({
                month: selectedDate.getMonth(),
                year: selectedDate.getFullYear(),
            });
        }
    }, [selectedDate]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [brand, setBrand] = useState('');
    const [device, setDevice] = useState('');
    const [devices, setDevices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deviceValue, setdeviceValue] = useState('');
    const [filteredDevices, setFilteredDevices] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [categories, setCategories] = useState([]);
    const [repairID, setRepairID] = useState(); // Store the list of repairs for the device
    const [error, setError] = useState('');


   

    const[repairs,setRepairs]=useState([]);
    const [issueInput, setIssueInput] = useState(''); // Input for issue autocomplete
    const [filteredIssues, setFilteredIssues] = useState([]); // List of filtered issues
    const [selectedIssue, setSelectedIssue] = useState([]); // Selected issue(s)
    
    const handleNameChange = useCallback((newValue) => setName(newValue), []);
    const handleEmailChange = useCallback((newValue) => setEmail(newValue), []);
    const handlePhoneChange = useCallback((newValue) => setPhone(newValue), []);
    const handleBrandChange = useCallback((newValue) => {
        setBrand(newValue);
        setDevice(''); // Clear device field
        setdeviceValue(''); // Clear input value for device
        setSelectedOptions([]); // Clear selected options for device
    }, []);   


    const [emailValidationError, setEmailValidationError] = useState('');
    const [nameValidationError, setNameValidationError] = useState('');
    const [phoneValidationError, setPhoneValidationError] = useState('');
    const [dateValidationError, setDateValidationError] = useState('');
    const [deviceValidationError, setDeviceValidationError] = useState('');
    const [issueValidationError, setIssueValidationError] = useState('');
    const [validationErrorsAvailable, setValidationErrorsAvailable] = useState(false); // Initialized as false

    const isValidEmail = (email) => {
      // Check for empty email
      if (!email) {
          return false; // Return false if email is empty
      }
      // Regular expression for validating email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  };
  
  


  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
  
    // Reset all validation errors
    setNameValidationError('');
    setPhoneValidationError('');
    setEmailValidationError('');
    setDeviceValidationError('');
    setIssueValidationError('');
  
    let hasValidationErrors = false; // New flag for checking errors
  
    // Validate required fields
    if (!name) {
      setNameValidationError('Name is required.');
      hasValidationErrors = true;
    }
    if (!phone) {
      setPhoneValidationError('Phone number is required.');
      hasValidationErrors = true;
    }
    if (!deviceValue) {
      setDeviceValidationError('Device is required.');
      hasValidationErrors = true;
    }
    if (!issueInput) {
      setIssueValidationError('Issue is required.');
      hasValidationErrors = true;
    }
    if (!isValidEmail(email)) {
      setEmailValidationError('Please enter a valid email address.');
      hasValidationErrors = true;
    }
  
    // If there are any validation errors, set the state and return early
    if (hasValidationErrors) {
      setValidationErrorsAvailable(true); // Set errors available to true
      return; // Exit if there are errors
    }
  
    // If no validation errors, reset validation error state and proceed with form submission
    setValidationErrorsAvailable(false); // No errors, set this to false
  
    console.log({
      name,
      email,
      phone,
      visitDate,
      brand,
      deviceValue,
      issueInput,
    });
  
    // Clear all input fields if submission was successful (i.e., no validation errors)
    setName('');
    setEmail('');
    setPhone('');
    setdeviceValue('');
    setIssueInput('');
  
    // Optionally, reset any other relevant state here
  };


    
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

      useEffect(() => {
        // Only fetch data when a valid repairID is available
        if (!repairID) {
          return; // Exit if repairID is not defined
        }
      
        const fetchProblems = async () => {
          setLoading(true); // Start loading state
          try {
            const apiKey = process.env.NEXT_PUBLIC_REPAIRDESK_API_KEY;
      
            const response = await axios.get(`https://api.repairdesk.co/api/web/v1/problems/${repairID}?api_key=${apiKey}`);
      
            if (response.data.success) {
              setRepairs(response.data.data);

            } else {
              setError('Failed to fetch repairs');
            }
          } catch (err) {
            console.error('Fetch error:', err);  // Debugging
            setError('An error occurred while fetching data');
          } finally {
            setLoading(false); // End loading state
          }
        };
      
        fetchProblems();
      }, [repairID]); // Dependency on repairID
      



    

        // Update filtered devices based on the selected company
        useEffect(() => {
            if (brand) {
              const filtered = devices
                .filter(device => device.company === brand)
                .sort((a, b) => a.name.localeCompare(b.name)) // Sort devices alphabetically by name
                .map(device => ({ label: device.name, value: device.id })); // Format for Autocomplete
              
              setFilteredDevices(filtered);

              setDevice(''); // Reset device dropdown when company changes
              setRepairs([]);
              setIssueInput('')
            }
        }, [brand, devices]);
        

        const updateText = useCallback(
            (value) => {
              setdeviceValue(value); // Update the input value
          
              if (value === '') {
                // If the input is empty, show all filtered devices based on the selected brand
                const filtered = devices
                  .filter(device => device.company === brand) // Filter devices based on selected brand
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map(device => ({ label: device.name, value: device.id })); // Format for Autocomplete
                setFilteredDevices(filtered);
                return; // Exit early to avoid unnecessary filtering
              }
          
              // Create a regex for matching the input value
              const filterRegex = new RegExp(value, 'i');
              const resultOptions = filteredDevices.filter((option) =>
                option.label.match(filterRegex) // Match against the label
              );
          
              setFilteredDevices(resultOptions); // Update filtered devices based on the regex match
            },
            [filteredDevices, brand, devices] // Add brand and devices to the dependency array
          );
          
          

  const updateSelection = useCallback(
    (selected) => {
      const selectedValue = selected.map((selectedItem) => {
        const matchedOption = filteredDevices.find((option) => option.value === selectedItem);
        return matchedOption && matchedOption.label;
      });
      setRepairID(selected)
      setSelectedOptions(selected);
      setIssueInput('')

      setdeviceValue(selectedValue[0] || ''); // Handle single selection case
    },
    [filteredDevices],
  );
  
  const uniqueCompanies = [...new Set(devices.map(device => device.company))].sort((a, b) => a.localeCompare(b));

  const textField = (
    <Autocomplete.TextField
      onChange={updateText}
      label="Device"
      value={deviceValue}
      error={deviceValidationError}
    //   prefix={<Icon source={SearchIcon} tone="base" />}
      placeholder="Select or enter device"
      autoComplete="off"
              requiredIndicator 

    />
  );
  useEffect(() => {
    if (repairs && repairs.length > 0) {
      setFilteredIssues(repairs.map(repair => ({ label: repair.name, value: repair.id }))); // Format repairs for Autocomplete
    }
  }, [repairs]);
  const updateIssueText = useCallback(
    (value) => {
      setIssueInput(value); // Update the input value
  
      if (value === '') {
        setFilteredIssues(repairs.map(repair => ({ label: repair.name, value: repair.id }))); // Show all repairs if input is empty
        return;
      }
  
      const filterRegex = new RegExp(value, 'i');
      const resultOptions = filteredIssues.filter((option) =>
        option.label.match(filterRegex) // Match input against label
      );
  
      setFilteredIssues(resultOptions);
    },
    [filteredIssues, repairs]
  );
  
  const updateIssueSelection = useCallback(
    (selected) => {
      const selectedValue = selected.map((selectedItem) => {
        const matchedOption = filteredIssues.find((option) => option.value === selectedItem);
        return matchedOption && matchedOption.label;
      });
      setSelectedIssue(selected); // Update selected issue(s)
      setIssueInput(selectedValue[0] || ''); // Handle single selection case
    },
    [filteredIssues],
  );
    

    return (
        <div className="p-0 relative " >
            <form onSubmit={handleSubmit} className='flex flex-wrap gap-4'>
                <div className='w-full flex flex-col lg:flex-row gap-4'>
                    <div className="w-full md:w-1/2">
                        <TextField 
                            label="Name" 
                            value={name} 
                            onChange={handleNameChange} 
                            autoComplete="off" 
                            requiredIndicator // Add requiredIndicator attribute
                            error={nameValidationError}
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <TextField 
                            label="Email" 
                            type="email" 
                            value={email} 
                            onChange={handleEmailChange} 
                            autoComplete="off" 
                            error={emailValidationError}
                            requiredIndicator // Add requiredIndicator attribute
                        />
                    </div>
                </div>
                <div className='w-full flex flex-col lg:flex-row gap-4'>
                    <div className="w-full md:w-1/2">
                        <TextField 
                            label="Phone" 
                            type="tel" 
                            value={phone} 
                            onChange={handlePhoneChange} 
                            autoComplete="off" 
                            requiredIndicator // Add requiredIndicator attribute
                            error={phoneValidationError}
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <Popover
                            active={visible}
                            autofocusTarget="none"
                            preferredAlignment="left"
                            fullWidth
                            preferInputActivator={false}
                            preferredPosition="below"
                            preventCloseOnChildOverlayClick
                            onClose={handleOnClose}
                            activator={
                                <TextField
                                    role="combobox"
                                    label={"Date to visit"}
                                    suffix={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                        <path fillRule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z" clipRule="evenodd" />
                                    </svg>}
                                    value={visitDate}
                                    onFocus={() => setVisible(true)}
                                    onChange={handledeviceValueChange}
                                    autoComplete="off"
                                    requiredIndicator // Add requiredIndicator attribute
                                />
                            }
                        >
                            <Card>
                                <DatePicker
                                    month={month}
                                    year={year}
                                    selected={selectedDate}
                                    onMonthChange={handleMonthChange}
                                    onChange={handleDateSelection}
                                />
                            </Card>
                        </Popover>
                    </div>
                </div>
                <div className='w-full flex flex-col lg:flex-row gap-4'>
                    <div className="w-full md:w-1/2">
                      
                        <Select
      label="Brand"
      options={uniqueCompanies}
      onChange={handleBrandChange}
      value={brand}
      requiredIndicator // Add requiredIndicator attribute

    />
                    </div>
                    <div className="w-full md:w-1/2">
                       
  
     <Autocomplete
        options={filteredDevices}
        selected={selectedOptions}
        onSelect={updateSelection}
        textField={textField}
      />
                    </div>
                </div>
                <div className="w-full">
                <Autocomplete
    options={filteredIssues}
    selected={selectedIssue}
    onSelect={updateIssueSelection}
    textField={
      <Autocomplete.TextField
        onChange={updateIssueText}
        label="Issue"
        value={issueInput}
        placeholder="Select or enter issue"
        autoComplete="off"
        error={issueValidationError}
        requiredIndicator // Add requiredIndicator attribute
      />
    }
  />
                </div>
                <div className='mt-4'>
                    <Button onClick={handleSubmit} variant='primary'>Book Repair</Button> {/* Change to type='submit' */}
                </div>
            </form>
            <p className="text-base mt-8 text-left text-zinc-500">
                By submitting, you agree to our <Link className="text-semantic-action-600 underline" href={'/privacy-policy'}>Privacy Policy</Link> and <Link className="text-semantic-action-600 underline" href={'/terms-and-conditions'}>Terms & Conditions</Link>
            </p>
        </div>
    );
};

export default Bookrepair;
