import { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { db } from "../../firebase";

const inter = Inter({ subsets: ["latin"] });

export default function Usersform() {
   
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch users from Firestore
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = collection(db, 'Users');
        const usersSnapshot = await getDocs(usersCollection);
        const usersList = usersSnapshot.docs.map(doc => doc.data());
        setUsers(usersList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users: ", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Add user to state
  const addUsers = async (e) => {
    e.preventDefault();
    const newUser = { name, email, phone, message };

    if (newUser.name !== '' && newUser.email !== '' && newUser.phone !== '') {
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
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  return (
  <>
      <form onSubmit={addUsers} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          required
          onChange={(e) => setPhone(e.target.value)}
          className="p-2 border rounded"
        />
        <textarea
          placeholder="Message (optional)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-2 border rounded h-32"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </form>

      {loading ? (
        <div className="spinner"></div>
      ) : (
        <ul className="list-disc mt-8 flex flex-row gap-8">
          {users.map((user, index) => (
            <li key={index} className="flex flex-col items-start mb-4 p-4 border rounded">
              <div>
                <strong>Name:</strong> {user.name}
              </div>
              <div>
                <strong>Email:</strong> {user.email}
              </div>
              <div>
                <strong>Phone:</strong> {user.phone}
              </div>
              <div>
                <strong>Message:</strong> {user.message}
              </div>
            </li>
          ))}
        </ul>
        
      )}</>
  
  )
}