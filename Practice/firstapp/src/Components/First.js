import "./First.css";
function First(props) {
  const count = props.count;
  return (
    <div>
      <p className="first">{count}</p>
    </div>
  );
}
export default First;
