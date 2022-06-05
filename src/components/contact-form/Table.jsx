import { useState } from "react";

const Table = ({ contacts }) => {
  const [filter, setFilter] = useState("All");
  const handleOnChange = (e) => {
    setFilter(e.target.value);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const searchCB = (contact) =>
    contact.name.includes(searchTerm) || contact.email.includes(searchTerm);

  let filteredContacts = [];
  if (filter === "All") {
    filteredContacts = searchTerm ? contacts.filter(searchCB) : contacts;
  } else {
    filteredContacts = contacts.filter(
      (contact) => contact.group === filter && searchCB(contact)
    );
  }
  console.log(filteredContacts);

  if (searchTerm) {
    filteredContacts = contacts.filter(
      (contact) =>
        contact.name.includes(searchTerm) || contact.email.includes(searchTerm)
    );
  }

  return (
    <>
      <div>
        <br />
        Filters:
        <select value={filter} onChange={handleOnChange}>
          <option value="All">All</option>
          <option value="">None</option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
        </select>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="search"
          placeholder="search"
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.group}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
