import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
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
  //////////////////////////////////
  const deleteHandler = (id) => {
    console.log("clicked", id);
    const filteredContact = Contacts.filter((t) => t.id !== id);
    setContacts(filteredContact);
  };
  //////////////////////////////////
  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts) setContacts(savedContacts);
  }, []);
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(Contacts));
  }, [Contacts]);
  ///////////////////////////////////

  return (
    <Switch>
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
