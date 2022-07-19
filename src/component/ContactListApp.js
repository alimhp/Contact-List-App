import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";
import ContactDetail from "./ContactDetail";
import axios from "axios";
import getContacts from "../services/getContactsService";
import deleteOneContact from "../services/deleteContactService";
import addOneContact from "../services/addContactService";

const ContactList = () => {
  const [Contacts, setContacts] = useState([]);
  ///////////////////////////////////
  const addTodoHandler = async (Input) => {
    try {
      setContacts([
        ...Contacts,
        { id: Math.ceil(Math.random() * 100), ...Input },
      ]);
      await addOneContact(Input);
    } catch (error) {}
  };
  // const addTodoHandler = (Input) => {
  //   const newContact = {
  //     id: Math.floor(Math.random() * 100),
  //     name: Input.name,
  //     email: Input.email,
  //   };
  //   setContacts([...Contacts, newContact]);
  // };
  //////////////////////////////////
  const deleteHandler = async (id) => {
    try {
      const filteredContacts = Contacts.filter((c) => c.id !== id);
      setContacts(filteredContacts);
      await deleteOneContact(id);
    } catch (error) {}
  };
  // const deleteHandler = (id) => {
  //   console.log("clicked", id);
  //   const filteredContact = Contacts.filter((t) => t.id !== id);
  //   setContacts(filteredContact);
  // };
  //////////////////////////////////
  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await getContacts();
      setContacts(data);
    };
    try {
      fetchContacts();
    } catch (error) {}
  }, []);
  ///////////////////////////////////

  return (
    <Switch>
      <Route path="/user/:id" component={ContactDetail} />
      <Route
        path="/add"
        component={(props) => (
          <Form addTodoHandler={addTodoHandler} {...props} />
        )}
      />
      <Route
        path="/"
        exact
        component={(props) => (
          <List Contacts={Contacts} ondelete={deleteHandler} {...props} />
        )}
      />
    </Switch>
  );
};

export default ContactList;
