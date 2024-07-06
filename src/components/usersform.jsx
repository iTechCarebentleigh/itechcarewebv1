import { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { db } from "../../firebase";
import { Button, TextField, Banner } from '@shopify/polaris';

export default function Usersform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({});
  const [showBanner, setShowBanner] = useState(false);

  // Fetch users from Firestore
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = collection(db, 'Users');
        const usersSnapshot = await getDocs(usersCollection);
        const usersList = usersSnapshot.docs.map(doc => doc.data());
        setUsers(usersList);
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (showBanner) {
      const timer = setTimeout(() => {
        setShowBanner(false);
      }, 3000);
      return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
    }
  }, [showBanner]);

  const validateFields = () => {
    const errors = {};
    if (!name) errors.name = "Name is required";
    if (!email) errors.email = "Email is required";
    if (!phone) errors.phone = "Phone is required";
    return errors;
  };

  // Add user to state
  const addUsers = async (e) => {
    e.preventDefault();
    const errors = validateFields();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    setSending(true);
    const newUser = { name, email, phone, message };

    try {
      await addDoc(collection(db, 'Users'), {
        name: newUser.name.trim(),
        email: newUser.email.trim(),
        phone: newUser.phone,
        message: newUser.message.trim(),
      });
      setUsers([...users, newUser]);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setErrors({});
      setShowBanner(true); // Show banner on successful submission
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <form onSubmit={addUsers} className="flex flex-col gap-4 w-full">
        <TextField
          label="Name"
          value={name}
          requiredIndicator
          placeholder="Enter your name"
          onChange={(value) => setName(value)}
          autoComplete="off"
          error={errors.name}
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          requiredIndicator
          placeholder="Enter your email"
          onChange={(value) => setEmail(value)}
          autoComplete="off"
          error={errors.email}
        />
        <TextField
          label="Phone"
          type="tel"
          value={phone}
          requiredIndicator
          placeholder="Enter your phone"
          onChange={(value) => setPhone(value)}
          autoComplete="off"
          prefix="+61"
          error={errors.phone}
        />
        <TextField
          label="Message"
          value={message}
          placeholder="Enter your message"
          onChange={(value) => setMessage(value)}
          multiline={6}
          autoComplete="off"
        />
        <Button variant="primary" submit loading={sending}>Submit</Button>
      </form>
      {showBanner && (
        <Banner
          onDismiss={() => setShowBanner(false)}
        >
          <p>Your query has been submitted!</p>
        </Banner>
      )}
    </>
  );
}
