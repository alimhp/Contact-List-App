import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";
import ContactDetail from "./ContactDetail";
import getContacts from "../services/getContactsService";
import deleteOneContact from "../services/deleteContactService";
import addOneContact from "../services/addContactService";
import EditContact from "./Edit/EditContact";
import updateContact from "../services/updateContact";

const ContactList = () => {
  const [Contacts, setContacts] = useState([]);
  ///////////////////////////////////
  const addTodoHandler = async (Input) => {
    try {
      const { data } = await addOneContact(Input);
      setContacts([...Contacts, data]);
    } catch (error) {}
  };
  ////////////////////////////////////
  const editContactHandler = async (Input, id) => {
    try {
      await updateContact(id, Input);
      const { data } = await getContacts();
      setContacts(data);
    } catch (error) {}
  };
  //////////////////////////////////
  const deleteHandler = async (id) => {
    try {
      await deleteOneContact(id);
      const filteredContacts = Contacts.filter((c) => c.id !== id);
      setContacts(filteredContacts);
    } catch (error) {
      console.log("error...");
    }
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
      <Route
        path="/edit/:id"
        component={(props) => (
          <EditContact editContactHandler={editContactHandler} {...props} />
        )}
      />
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
