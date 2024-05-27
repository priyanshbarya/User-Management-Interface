import React from "react";

const UserHeader = ({
  user,
  onToggle,
  isEditing,
  editUser,
  handleChange,
  isOpen,
}) => {
  const handleToggle = () => {
    if (!isEditing) {
      onToggle();
    }
  };

  return (
    <div className="user-header" onClick={handleToggle}>
      {isEditing ? (
        <div className="user-initials">
          <img src={user.picture} alt="" />
          <input
            type="text"
            name="name"
            value={editUser.name}
            onChange={handleChange}
          />
        </div>
      ) : (
        <div className="user-initials">
          <img src={user.picture} alt="" />
          <p>{user.name}</p>
        </div>
      )}
      <span>{isOpen ? "▲" : "▼"}</span>
    </div>
  );
};

export default UserHeader;
