import { useState } from "react";
import Chat from "./Chat";
import ContactList from "./ContactList";
import "./Messenger.css";

export default function Messenger() {
  const [newcontacts, setContact] = useState(contacts);
  const [to, setTo] = useState(contacts[0]);

  const handleNewTask = (newContact, text) => {
    setContact(
      newcontacts.map((contact) => {
        if (contact.id === newContact.id) {
          return { ...newContact, text };
        } else {
          return contact;
        }
      })
    );
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <ContactList
        contacts={newcontacts}
        selectedContact={to}
        onSelect={(contact) => setTo(contact)}
      />
      <Chat key={to.id} contact={to} onSetText={handleNewTask} />
    </div>
  );
}

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com", text: "" },
  { id: 1, name: "Alice", email: "alice@mail.com", text: "" },
  { id: 2, name: "Bob", email: "bob@mail.com", text: "" },
];
