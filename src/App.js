import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import UserAccordion from "./components/UserAccordion";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const App = () => {
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [openAccordionId, setOpenAccordionId] = useState(null);
  const [editingAccordion, setEditingAccordion] = useState(null);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (!storedUsers) {
      axios
        .get("/celebrities.json")
        .then((response) => {
          const usersWithAge = response.data.map((user) => ({
            ...user,
            age: calculateAge(user.dob),
            name: user.first + " " + user.last,
            gender: capitalizeFirstLetter(user.gender),
          }));
          setUsers(usersWithAge);
          localStorage.setItem("users", JSON.stringify(usersWithAge));
        })
        .catch((error) => {
          console.error("There was an error fetching the data!", error);
        });
    } else {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const difference = Date.now() - birthDate.getTime();
    const ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    `${user.name}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAccordionToggle = (id) => {
    if (editingAccordion === null) {
      setOpenAccordionId(openAccordionId === id ? null : id);
    }
  };

  return (
    <div className="App">
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      <div className="user-list">
        {filteredUsers.map((user) => (
          <UserAccordion
            key={user.id}
            user={user}
            // users={users}
            isOpen={openAccordionId === user.id}
            onToggle={() => handleAccordionToggle(user.id)}
            setUsers={setUsers}
            setEditingAccordion={setEditingAccordion}
          />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
