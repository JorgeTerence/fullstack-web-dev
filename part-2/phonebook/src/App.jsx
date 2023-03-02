import { useState } from "react";

export default () => {
  const [contacts, setContacts] = useState([]);
  const [newName, setNewName] = useState("");

  const addContact = (e) => {
    e.preventDefault();
    setContacts(contacts.concat({ name: newName}))
    console.log(newName);
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={newName}
          onChange={handleNameChange}
        />
        <button type="submit">Save</button>
      </form>
      <h2>Numbers</h2>
      <Contacts contacts={contacts} />
    </div>
  );
};

const Contacts = ({ contacts }) => (
  <ul>
    {contacts.map((person) => (
      <li key={person.name}>{person.name}</li>
    ))}
  </ul>
);
