import { useState } from "react";
import Form from "./Form";
import List from "./List";

const ContactList = () => {
  const [Contacts, setContacts] = useState([]);

  const addTodoHandler = (Input) => {
    const newContact = {
      id: Math.floor(Math.random() * 100),
      name: Input.name,
      email: Input.email,
    };
    setContacts([...Contacts, newContact]);
  };
  const deleteHandler = (id) => {
    console.log("clicked", id);
    const filteredContact = Contacts.filter((t) => t.id !== id);
    setContacts(filteredContact);
  };
  return (
    <>
      <Form addTodoHandler={addTodoHandler} />
      <List Contacts={Contacts} ondelete={deleteHandler} />
    </>
  );
};

export default ContactList;
