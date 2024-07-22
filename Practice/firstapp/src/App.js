import "./App.css";
import First from "./Components/First";
import UserData from "./Components/UserData";

function App() {
  // const firstcount = "First";
  const response = [
    {
      count: "First",
      name: "Dhananjay ",
      surname: "Yadav",
    },
    {
      count: "Second",
      name: "Vivek ",
      surname: "Yadav",
    },
    {
      count: "Third",
      name: "Ravi ",
      surname: "Yadav",
    },
  ];
  return (
    <div>
      <div className="App">Learn React</div>

      <First count={response[0].count}></First>
      <UserData name={response[0].name} surname={response[0].surname}>
        Hello
      </UserData>
      <First count={response[1].count}></First>

      <UserData
        name={response[1].name}
        surname={response[1].surname}
      ></UserData>
      <First count={response[2].count}></First>

      <UserData
        name={response[2].name}
        surname={response[2].surname}
      ></UserData>
    </div>
  );
}

export default App;
