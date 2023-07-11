import React, { useEffect } from "react";
import Contact from "./Contact";
import { useContactContext } from "../contexts/ContactContext";

const ContactList = () => {
  const { contacts, getContacts } = useContactContext();
  useEffect(() => {
    getContacts();
  }, []);
  return (
    <div style={{ width: "400px", textAlign: " center", margin: "25px auto" }}>
      <h1 style={{ color: "rgb(142, 142, 233)", marginBottom: "5%" }}>
        My Contacts
      </h1>
      <div>
        {contacts.map((item) => (
          <Contact key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
