import "./ItemDate.css";

function ItemDate(props) {
  const time = [
    {
      date: props.time[0].day,
      month: props.time[0].month,
      year: props.time[0].year,
    },
    {
      date: props.time[1].day,
      month: props.time[1].month,
      year: props.time[1].year,
    },
    {
      date: props.time[2].day,
      month: props.time[2].month,
      year: props.time[2].year,
    },
    {
      date: props.time[3].day,
      month: props.time[3].month,
      year: props.time[3].year,
    },
  ];

  return (
    <div className="date">
      <h1>{time[0].year}</h1>
      <h2>{time[0].month}</h2>
      <h2>{time[0].date}</h2>
    </div>
  );
}
export default ItemDate;
