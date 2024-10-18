import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Icon, Popover, Card, TextField, DatePicker,Autocomplete } from '@shopify/polaris';
import Link from 'next/link';

import { Button as PolarisButton, ButtonProps } from '@shopify/polaris';

import axios from 'axios';
import {Select} from '@shopify/polaris';
import { collection, addDoc, getDocs, serverTimestamp } from "firebase/firestore"; // Add serverTimestamp
import { db } from "../../../firebase";
import { toast } from 'sonner'
import {
  ClockIcon
} from '@shopify/polaris-icons';
import moment from 'moment-timezone'; // Import moment-timezone

const Requestquote = () => {
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
    const [queryLoading,setQueryLoading]=useState(false)

   

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
    const [deviceValidationError, setDeviceValidationError] = useState('');
    const [issueValidationError, setIssueValidationError] = useState('');
    const [validationErrorsAvailable, setValidationErrorsAvailable] = useState(false); // Initialized as false
    const [brandValidationError, setBrandValidationError] = useState('');

    const isValidEmail = (email) => {
      // Check for empty email
      if (!email) {
          return false; // Return false if email is empty
      }
      // Regular expression for validating email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  };
  
  



  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    setQueryLoading(true);  // Start the loading state

    // Reset all validation errors
    setNameValidationError('');
    setPhoneValidationError('');
    setEmailValidationError('');
    setDeviceValidationError('');
    setIssueValidationError('');
    setBrandValidationError(''); // Reset brand validation error

    let hasValidationErrors = false; // Flag for checking errors

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
    if (brand === '') {
      setBrandValidationError('Brand is required.');
      hasValidationErrors = true;
  }

    // If there are any validation errors, reset the loading state and return early
    if (hasValidationErrors) {
        setValidationErrorsAvailable(true);
        toast.error('Please enter valid inputs.');
        setQueryLoading(false);  // Reset loading state on validation error
        return;  // Exit if there are errors
    }



    // If no validation errors, reset validation error state and proceed with form submission
    setValidationErrorsAvailable(false);

    // Prepare data to send to the API
    const formData = {
        name,
        email,
        phone,
        brand,
        device: deviceValue,
        issue: issueInput,
        createdAt: serverTimestamp(), // Timestamp for when the document is created
    };

    try {
        // Send a POST request to your API
        const response = await axios.post('/api/request-a-quote', { formData });
        await addDoc(collection(db, "requestQuote"), formData);  // Save to your collection

        if (response.data.success) {
            // Clear all input fields if submission was successful
            toast.success('Successfully requested a quote.');

            setName('');
            setEmail('');
            setPhone('');
            setdeviceValue('');
            setIssueInput('')
            setBrand('')
            // Show success toast notification
        } else {
            setError('Submission failed, please try again.');
        }
    } catch (error) {
        setError('An error occurred while submitting the form.');
    } finally {
        // Always reset loading state after try/catch
        setQueryLoading(false);
    }
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

              setdeviceValue(''); // Reset device dropdown when company changes
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
      placeholder="Select or type your device"
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
                <div className='w-full flex flex-col md:flex-row gap-4'>
                    <div className="w-full md:w-1/2">
                        <TextField 
                            label="Name" 
                            value={name} 
                            onChange={handleNameChange} 
                            autoComplete="off" 
                            requiredIndicator // Add requiredIndicator attribute
                            error={nameValidationError}
                            placeholder='Enter your name'

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
                            placeholder='Enter your email'

                        />
                    </div>
                </div>
                <div className='w-full flex flex-col md:flex-row gap-4'>
                    <div className="w-full md:w-1/2">
                        <TextField 
                            label="Phone" 
                            type="tel" 
                            value={phone} 
                            onChange={handlePhoneChange} 
                            autoComplete="off" 
                            requiredIndicator // Add requiredIndicator attribute
                            error={phoneValidationError}
                            prefix="+61"
                            placeholder='Enter your phone'

                        />
                        
                    </div>
                    <div className="w-full md:w-1/2">
                      
                    <Select
  label="Brand"
  options={[{ value: '', label: 'Select a brand' }, ...uniqueCompanies]}
  onChange={handleBrandChange}
  value={brand}
  requiredIndicator // Add requiredIndicator attribute
  error={brandValidationError}
/>
                  </div>
                    
                </div>
                <div className='w-full flex flex-col md:flex-row gap-4'>
                    
                    <div className="w-full ">
                       
  
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
        placeholder="Select or type your issue"
        autoComplete="off"
        error={issueValidationError}
        requiredIndicator // Add requiredIndicator attribute
      />
    }
  />
                </div>
                <div className='mt-4'>
                                    <PolarisButton  submit
 loading={queryLoading} onClick={handleSubmit} variant='primary'>Request a quote</ PolarisButton> {/* Change to type='submit' */}
                </div>
            </form>
            <p className="text-base mt-8 text-left text-zinc-500">
                By submitting, you agree to our <Link className="text-semantic-action-600 underline" href={'/privacy-policy'}>Privacy Policy</Link> and <Link className="text-semantic-action-600 underline" href={'/terms-and-conditions'}>Terms & Conditions</Link>
            </p>
        </div>
    );
};

export default Requestquote;
