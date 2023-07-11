import React, { useState } from "react";
import { useContactContext } from "../contexts/ContactContext";
import { Navigate, useNavigate } from "react-router-dom";

const AddContactPage = () => {
  const [nameVal, setNameVal] = useState("");
  const [surnameVal, setSurnameVal] = useState("");
  const [numberVal, setNumberVal] = useState("");
  const { addContact } = useContactContext();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!nameVal.trim() || !surnameVal.trim() || !numberVal.trim()) {
      return;
    }
    const newContact = {
      name: nameVal,
      surname: surnameVal,
      number: numberVal,
      completed: false,
    };
    addContact(newContact);
    navigate("/");
  }
  return (
    <div className="addContact">
      <h1>Add Contact</h1>
      <form className="addForm1" onSubmit={handleSubmit}>
        <input
          value={nameVal}
          onChange={(e) => {
            setNameVal(e.target.value);
          }}
          type="text"
          className="nameInp"
          placeholder="Enter first name"
        />
        <input
          value={surnameVal}
          onChange={(e) => {
            setSurnameVal(e.target.value);
          }}
          type="text"
          className="surnameInp"
          placeholder="Enter surname"
        />
        <input
          value={numberVal}
          onChange={(e) => {
            setNumberVal(e.target.value);
          }}
          type="text"
          className="phoneInp"
          placeholder="Enter phone number"
        />
        <button>Save</button>
      </form>
    </div>
  );
};

export default AddContactPage;
