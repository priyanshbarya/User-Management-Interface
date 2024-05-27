import React from "react";
import WrongIcon from "../assets/WrongIcon.png";
import CorrectIcon from "../assets/CorrectIcon.png";
import { toast } from "react-toastify";

const EditUserDetails = ({
  editUser,
  setEditUser,
  isChanged,
  setIsChanged,
  handleChange,
  user,
  setUsers,
  setIsEditing,
  setEditingAccordion,
}) => {
  const numericKey = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const numericKeyWithArrow = [
    "Backspace",
    "Delete",
    "ArrowRight",
    "ArrowLeft",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
  ];
  const handleSave = () => {
    const requiredFields = ["name", "age", "gender", "country", "description"];
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!editUser[field]) {
        isValid = false;
      }
    });

    if (!isValid) {
      toast.error("Fields cannot be empty.", {
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }
    toast.success("Successfully Edited User Info.", {
      autoClose: 3000,
      theme: "dark",
    });
    setUsers((prevUsers) =>
      prevUsers.map((u) => (u.id === user.id ? editUser : u))
    );
    setIsEditing(false);
    setIsChanged(false);
    setEditingAccordion(null);
  };

  const handleCancel = () => {
    setEditUser({ ...user });
    setIsEditing(false);
    setIsChanged(false);
    setEditingAccordion(null);
  };
  return (
    <div className="user-info-container">
      <div className="user-basic-info">
        <div className="info-styler">
          <p>Age</p>
          <input
            type="text"
            name="age"
            value={editUser.age}
            onChange={(e) => handleChange(e)}
            onKeyDown={(e) => {
              const key = e.key;
              const neccesaryKey = numericKeyWithArrow.includes(key);
              if (!neccesaryKey) {
                e.preventDefault();
              }
            }}
          />
        </div>
        <div className="info-styler">
          <p>Gender</p>
          <select
            name="gender"
            value={editUser.gender}
            onChange={(e) => handleChange(e)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Transgender">Transgender</option>
            <option value="Rather not say">Rather not say</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="info-styler">
          <p>Country</p>
          <input
            type="text"
            name="country"
            value={editUser.country}
            onChange={(e) => handleChange(e)}
            onKeyDown={(e) => {
              const key = e.key;
              const neccesaryKey = numericKey.includes(key);
              if (neccesaryKey) {
                e.preventDefault();
              }
            }}
          />
        </div>
      </div>
      <div className="info-styler">
        <p>Description</p>
        <textarea
          name="description"
          value={editUser.description}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="info-handle-btn">
        <div>
          <button onClick={handleCancel}>
            <img src={WrongIcon} alt="" />
          </button>
          <button disabled={!isChanged} onClick={handleSave}>
            <img src={CorrectIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserDetails;
