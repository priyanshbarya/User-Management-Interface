import React, { useState, useEffect } from "react";
import EditUserDetails from "./EditUserDetails.jsx";
import UserDetails from "./UserDetails.jsx";
import UserHeader from "./UserHeader.jsx";

const UserAccordion = ({ user, setUsers, isOpen, onToggle, setEditingAccordion }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editUser, setEditUser] = useState({ ...user });
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsEditing(false);
      setEditUser({ ...user });
      setIsChanged(false);
    }
  }, [isOpen, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prevUser) => ({ ...prevUser, [name]: value }));
    setIsChanged(true);
  };

  return (
    <div className="user-accordion">
      <UserHeader
        user={user}
        onToggle={onToggle}
        isEditing={isEditing}
        editUser={editUser}
        handleChange={handleChange}
        isOpen={isOpen}
      />
      {isOpen && (
        <div className="user-details">
          {isEditing ? (
            <EditUserDetails
              editUser={editUser}
              setEditUser={setEditUser}
              isChanged={isChanged}
              setIsChanged={setIsChanged}
              handleChange={handleChange}
              user={user}
              setUsers={setUsers}
              setIsEditing={setIsEditing}
              setEditingAccordion={setEditingAccordion}
            />
          ) : (
            <UserDetails
              user={user}
              setUsers={setUsers}
              setIsEditing={setIsEditing}
              setEditingAccordion={setEditingAccordion}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default UserAccordion;
