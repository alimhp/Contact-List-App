import { Link } from "react-router-dom";
const OneContact = ({ user, ondelete }) => {
  return (
    <div className="contactList" key={user.id}>
      <div>
        <Link to={{ pathname: `/user/${user.id}`, state: { user: user } }}>
          <div className="contactsData">
            <p>name: {user.name}</p>
            <p>email: {user.email}</p>
          </div>
        </Link>

        <button onClick={() => ondelete(user.id)}>delete</button>
      </div>
    </div>
  );
};

export default OneContact;
