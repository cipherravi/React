import "./Title.css";

function Title(props) {
  return (
    <div className="title">
      {/* {props.name.map((item, index) => {
        return <h1 key={index}>{item.name}</h1>;
      })} */}
      <h1>{props.name[0].name}</h1>
    </div>
  );
}
export default Title;
