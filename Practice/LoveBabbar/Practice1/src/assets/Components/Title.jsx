import "./Title.css";

function Title(props) {
  const name = [
    {
      name: props.name[0].name,
    },
    {
      name: props.name[1].name,
    },
    {
      name: props.name[2].name,
    },
    {
      name: props.name[3].name,
    },
  ];
  return (
    <div className="title">
      {name.map((item, index) => {
        <h1>{item}</h1>;
      })}
    </div>
  );
}
export default Title;
