import { Link } from "react-router-dom";

const ContactDetail = ({ location }) => {
  const { user } = location.state;
  // console.log(props.location.state.contact);
  return (
    <div>
      <p> user name is : {user.name} </p>
      <p> user email is : {user.email} </p>
      <Link to="/">
        <button className="button">go to contact list</button>
      </Link>
    </div>
  );
};

export default ContactDetail;
