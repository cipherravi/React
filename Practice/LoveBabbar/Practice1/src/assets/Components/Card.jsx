import "./Card.css";
import ItemDate from "./ItemDate";
import Title from "./Title";

function Card(props) {
  const time = [
    {
      day: props.data[0].date,
      month: props.data[0].month,
      year: props.data[0].year,
    },
    {
      day: props.data[1].date,
      month: props.data[1].month,
      year: props.data[1].year,
    },
    {
      day: props.data[2].date,
      month: props.data[2].month,
      year: props.data[2].year,
    },
    {
      day: props.data[3].date,
      month: props.data[3].month,
      year: props.data[3].year,
    },
  ];
  const name = [
    {
      name: props.data[0].name,
    },
    {
      name: props.data[1].name,
    },
    {
      name: props.data[2].name,
    },
    {
      name: props.data[3].name,
    },
  ];
  return (
    <div className="card">
      <ItemDate time={time}></ItemDate>
      <Title name={name}></Title>
    </div>
  );
}
export default Card;
