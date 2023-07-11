import React, { createContext, useContext, useState } from "react";
import { API } from "../utils/consts";
import axios from "axios";

const contactContext = createContext();
export function useContactContext() {
  return useContext(contactContext);
}
const ContactContext = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [oneContact, setOneContact] = useState(null);
  async function getContacts() {
    const { data } = await axios.get(API);
    setContacts(data);
  }
  async function addContact(newContact) {
    await axios.post(API, newContact);
    getContacts();
  }
  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContacts();
  }

  function checked(id) {
    const newData = contacts.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    const sortedArr = newData.sort((a, b) => b.completed - a.completed);
    setContacts(sortedArr);
  }

  async function getOneContact(id) {
    const { data } = await axios.get(`${API}/${id}`);
    setOneContact(data);
  }
  async function editContact(id, newData) {
    await axios.patch(`${API}/${id}`, newData);
    getContacts();
  }

  const value = {
    contacts,
    oneContact,
    getContacts,
    addContact,
    deleteContact,
    checked,
    getOneContact,
    editContact,
  };
  return (
    <contactContext.Provider value={value}>{children}</contactContext.Provider>
  );
};

export default ContactContext;
