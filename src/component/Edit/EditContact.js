import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getOneContact from "../../services/GetOneContact";

const EditContact = (props) => {
  const [Input, setInput] = useState({ name: "", email: "" });
//////////////////////////////////////
  const changeHandler = (e) => {
    setInput({ ...Input, [e.target.name]: e.target.value });
  };
  ///////////////////////////////////
  const submitHandler = (e) => {
    e.preventDefault();
    props.editContactHandler(Input, props.match.params.id);
    setInput({ name: "", email: "" });
    props.history.push("/");
  };
  /////////////////////////////////////
  useEffect(() => {
    const localFetch = async () => {
      try {
        const { data } = await getOneContact(props.match.params.id);
        setInput({ name: data.name, email: data.email });
      } catch (error) {}
    };
    localFetch();
  }, []);
  //////////////////////////////////////
  return (
    <form onSubmit={submitHandler}>
      <div className="formControl">
        <label>name</label>
        <input
          type="text"
          name="name"
          value={Input.name}
          onChange={changeHandler}
        />
      </div>
      <div className="formControl">
        <label>email</label>
        <input
          type="text"
          name="email"
          value={Input.email}
          onChange={changeHandler}
        />
      </div>

      <button type="submit">Edit contact</button>
      <Link to="/">
        <button>contact list</button>
      </Link>
    </form>
  );
};

export default EditContact;
