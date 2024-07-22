import "./UserData.css";

function UserData(props) {
  const name = props.name;
  const surname = props.surname;
  return (
    <div className="children">
      <div className="userdata">
        <span>{name}</span>
        <span>{surname}</span>
      </div>
      {props.children}
    </div>
  );
}
export default UserData;
