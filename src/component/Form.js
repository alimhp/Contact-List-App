import { useState } from "react";
import { Link } from "react-router-dom";

const Form = (props) => {
  const [Input, setInput] = useState({ name: "", email: "" });

  const changeHandler = (e) => {
    setInput({ ...Input, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.addTodoHandler(Input);
    setInput({ name: "", email: "" });
    props.history.push("/");
  };
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

      <button type="submit">Add</button>
      <Link to="/">
        <button>contact list</button>
      </Link>
    </form>
  );
};

export default Form;
