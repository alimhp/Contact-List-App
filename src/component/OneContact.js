const OneContact = ({ user, ondelete }) => {
  return (
    <div className="contactList" key={user.id}>
      <div className="contactsData">
        {" "}
        <p>name: {user.name}</p>
        <p>email: {user.email}</p>
        <button onClick={() => ondelete(user.id)}>delete</button>
      </div>
    </div>
  );
};

export default OneContact;
