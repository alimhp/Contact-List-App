import { Link } from "react-router-dom";
import OneContact from "./OneContact";

const List = ({ Contacts, ondelete }) => {
  const renderContacts = () => {
    if (Contacts.length === 0) return <h3>add Contact</h3>;

    return Contacts.map((c) => {
      return <OneContact key={c.id} user={c} ondelete={ondelete} />;
    });
  };

  return (
    <div>
      <Link to="/add">
        <button className="button">add contact </button>
      </Link>

      {renderContacts()}
    </div>
  );
};
export default List;
