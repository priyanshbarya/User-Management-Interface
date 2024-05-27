import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import EditIcon from "../assets/EditIcon.png";
import DeleteIcon from "../assets/DeleteIcon.png";
import { toast } from "react-toastify";

const UserDetails = ({ user, setUsers, setIsEditing, setEditingAccordion }) => {
  const handleEdit = () => {
    setIsEditing(true);
    setEditingAccordion(user.id);
  };

  const handleDelete = () => {
    confirmAlert({
      message: `Are you sure you want to delete ${user.name}?`,
      buttons: [
        {
          label: "Delete",
          onClick: () => {
            setUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id));
            toast.success("User Deleted Successfully", {
              autoClose: 3000,
              theme: "dark",
            });
            setEditingAccordion(null); 
          },
        },
        {
          label: "Cancel",
        },
      ],
    });
  };
  return (
    <div className="user-info-container">
      <div className="user-basic-info">
        <div className="info-styler">
          <p>Age</p>
          <p>{user.age + " "} Years</p>
        </div>
        <div className="info-styler">
          <p>Gender</p>
          <p>{user.gender}</p>
        </div>
        <div className="info-styler">
          <p>Country</p>
          <p>{user.country}</p>
        </div>
      </div>
      <div className="info-styler">
        <p>Description</p>
        <p>{user.description}</p>
      </div>

      <div className="info-handle-btn">
        <div>
          <button onClick={handleDelete}>
            <img src={DeleteIcon} alt="" />
          </button>
          {user.age >= 18 ? (
            <button onClick={handleEdit}>
              <img src={EditIcon} alt="" />
            </button>
          ) : (
            <button disabled onClick={handleEdit}>
              <img src={EditIcon} alt="" />
            </button>
          )}
        </div>
        {user.age < 18 && (
          <p className="minor-disclaimer">
            *Information of minor users cannot be edited.
          </p>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
