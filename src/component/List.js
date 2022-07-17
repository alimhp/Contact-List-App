import OneContact from "./OneContact";

const List = ({ Contacts, ondelete }) => {
  const renderContacts = () => {
    if (Contacts.length === 0) return <h3>add Contact</h3>;

    return Contacts.map((c) => {
      return <OneContact key={c.id} user={c} ondelete={ondelete} />;
    });
  };

  return <div >{renderContacts()}</div>;
};
export default List;
