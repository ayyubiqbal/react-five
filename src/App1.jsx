import { useState } from "react";
import ContactForm from "./components/contact-form/ContactForm";
import Table from "./components/contact-form/Table";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const getContact = (contact) => {
    setContacts([].concat(contacts, contact));
    console.log(contacts);
  };
  return (
    <div>
      <h1>Contact APP</h1>
      <ContactForm getContact={getContact} />
      <Table contacts={contacts} />
    </div>
  );
};

export default App;
