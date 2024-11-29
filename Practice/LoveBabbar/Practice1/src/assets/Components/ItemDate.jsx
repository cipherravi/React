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
      {/* {time.map((item, index) => {
        return (
          <div>
            <h1>{item.year}</h1>
            <h2>{item.month}</h2>
            <h2>{item.date}</h2>
          </div>
        );
      })} */}
      <h1>{time.year}</h1>
      <h2>{time.month}</h2>
      <h2>{time.date}</h2>
    </div>
  );
}
export default ItemDate;
