import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Icon, Popover, Card, TextField,  DatePicker,Autocomplete } from '@shopify/polaris';
import { Button as PolarisButton, ButtonProps } from '@shopify/polaris';

import Link from 'next/link';
import axios from 'axios';
import {Select} from '@shopify/polaris';
import { collection, addDoc, getDocs, serverTimestamp } from "firebase/firestore"; // Add serverTimestamp
import { db } from "../../../firebase";
import { toast } from 'sonner'
import {
  ClockIcon
} from '@shopify/polaris-icons';
import moment from 'moment-timezone'; // Import moment-timezone

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

    const [selectedTime, setSelectedTime] = useState('12:00'); // Default to 12:00

    const [visible, setVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [{ month, year }, setDate] = useState({
        month: selectedDate.getMonth(),
        year: selectedDate.getFullYear(),
    });
    const visitDate = `${selectedDate.toISOString().slice(0, 10)} ${selectedTime}:00`;
    const datePickerRef = useRef(null);
    const closedDates = [
      new Date('Mon Feb 12 2018 00:00:00 GMT-0500 (EST)'),
      new Date('Sat Feb 10 2018 00:00:00 GMT-0500 (EST)'),
      new Date('Wed Feb 21 2018 00:00:00 GMT-0500 (EST)'),
    ];
    function isNodeWithinPopover(node) {
        return datePickerRef?.current
            ? nodeContainsDescendant(datePickerRef.current, node)
            : false;
    }

    const handledeviceValueChange = () => {
    };
    const handleTimeChange = useCallback((newValue) => setSelectedTime(newValue), []);

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
    const [brandValidationError, setBrandValidationError] = useState('');
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
  
  



  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    setQueryLoading(true); // Start loading state

    // Reset all validation errors
    setNameValidationError('');
    setPhoneValidationError('');
    setEmailValidationError('');
    setDeviceValidationError('');
    setIssueValidationError('');
    setBrandValidationError(''); // Reset brand error

    let hasValidationErrors = false; // Flag to check errors

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

    // Stop submission if there are validation errors
    if (hasValidationErrors) {
        setValidationErrorsAvailable(true);
        toast.error('Please enter valid inputs.');
        setQueryLoading(false); // Reset loading state
        return; // Exit early
    }

   // Check valid booking time
const visitDateMoment = moment.tz(visitDate, 'Australia/Sydney');
const dayOfWeek = visitDateMoment.day();
const hour = visitDateMoment.hour();
const minute = visitDateMoment.minute();

// Weekday (Monday to Friday) validation
const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5;
const isWeekdayValid = (hour > 9 || (hour === 9 && minute >= 0)) && 
                       (hour < 17 || (hour === 17 && minute <= 30));

// Saturday validation (up to 4:00 PM)
const isSaturday = dayOfWeek === 6;
const isSaturdayValid = (hour > 10 || (hour === 10 && minute >= 0)) && 
                        (hour < 16 || (hour === 16 && minute <= 0));

// Sunday validation (up to 3:00 PM)
const isSunday = dayOfWeek === 0;
const isSundayValid = (hour > 10 || (hour === 10 && minute >= 0)) && 
                      (hour < 15 || (hour === 15 && minute <= 0));

// Combine validations
if (!(isWeekday && isWeekdayValid) && !(isSaturday && isSaturdayValid) && !(isSunday && isSundayValid)) {
    toast.custom((t) => (
        <div style={{ fontFamily: "var(--typography-font-family-sansserif)" }} className="w-full md:w-[350px] bg-amber-50 border border-amber-300 px-3 py-2 text-amber-500 rounded-xl shadow-2xl">
            <div className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M6.701 2.25c.577-1 2.02-1 2.598 0l5.196 9a1.5 1.5 0 0 1-1.299 2.25H2.804a1.5 1.5 0 0 1-1.3-2.25l5.197-9ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
                </svg>
                <span>Sorry, we aren't available at that period.</span>
            </div>
            <div className="mt-4 w-full">
                <span className="text-lg font-semibold">Booking Hours:</span>
                <table className="mt-1 border-collapse border border-amber-300 w-full">
                    <tbody>
                        <tr>
                            <td className="border border-amber-300 p-2 font-semibold">Weekdays</td>
                            <td className="border border-amber-300 p-2 flex justify-end">9:00 AM - 5:30 PM</td>
                        </tr>
                        <tr>
                            <td className="border border-amber-300 p-2 font-semibold">Saturday</td>
                            <td className="border border-amber-300 p-2 flex justify-end">10:00 AM - 4:00 PM</td>
                        </tr>
                        <tr>
                            <td className="border border-amber-300 p-2 font-semibold">Sunday</td>
                            <td className="border border-amber-300 p-2 flex justify-end">10:00 AM - 3:00 PM</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    ));
    setQueryLoading(false); // Reset loading state
    return; // Prevent submission
}


    // Proceed with form submission if no errors
    setValidationErrorsAvailable(false);
    const formData = { name, email, phone, visitDate, brand, device: deviceValue, issue: issueInput, createdAt: serverTimestamp() };

    try {
        const response = await axios.post('/api/book-repair-user', { formData });
        await addDoc(collection(db, "bookRepair"), formData);

        if (response.data.success) {
            toast.success('Successfully made a repair booking. P.S. Check your email');
            setName('');
            setEmail('');
            setPhone('');
            setdeviceValue('');
            setIssueInput('');
            setBrand('');
        } else {
            setError('Submission failed, please try again.');
        }
    } catch (error) {
        setError('An error occurred while submitting the form.');
    } finally {
        setQueryLoading(false); // Reset loading state
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
                            prefix="+61"

                            requiredIndicator // Add requiredIndicator attribute
                            error={phoneValidationError}
                            placeholder='Enter your phone'

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
                                <div className='flex flex-row gap-4'>
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
                                  <TextField
                                    label="Select Time"
                                    type="time"  // Use time input type
                                    value={selectedTime}
                                    suffix={ClockIcon}
                                    
                                    onChange={handleTimeChange}
                                    requiredIndicator
                                />
                                </div>
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
                <div className='w-full flex flex-col md:flex-row gap-4'>
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
                loading={queryLoading} onClick={handleSubmit} variant='primary'>Book Repair    </PolarisButton>

                </div>
            </form>
            <p className="text-base mt-8 text-left text-zinc-500">
                By submitting, you agree to our <Link className="text-semantic-action-600 underline" href={'/privacy-policy'}>Privacy Policy</Link> and <Link className="text-semantic-action-600 underline" href={'/terms-and-conditions'}>Terms & Conditions</Link>
            </p>
        </div>
    );
};

export default Bookrepair;
