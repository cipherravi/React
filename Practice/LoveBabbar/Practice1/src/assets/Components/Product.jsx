import "./Product.css";
function Product(props) {
  return (
    <div>
      <Card>
        name={props.data[0].name}
        day={props.data[0].date}
        month={props.data[0].month}
        year={props.data[0].year}
      </Card>
      <Card>
        name={props.data[1].name}
        day={props.data[1].date}
        month={props.data[1].month}
        year={props.data[1].year}
      </Card>
      <Card>
        name={props.data[2].name}
        day={props.data[2].date}
        month={props.data[2].month}
        year={props.data[2].year}
      </Card>
      <Card>
        name={props.data[3].name}
        day={props.data[3].date}
        month={props.data[3].month}
        year={props.data[3].year}
      </Card>
    </div>
  );
}

export default Product;
