import Form from './Components/Form.jsx';
import "./App.css";

//map example
const arr = [1, 2, 3, 4, 5, 6, 7];
const print = arr.map((ele) => {
  return <li key={ele}>{ele}</li>;
});

//using for each loop
// const print = [];
// arr.forEach((ele) => {
//   print.push(<li key={ele}>{ele}</li>)
// })
function App() {
  return (
    <div className="App">
      {/* <ul>{print}</ul> */}
      <Form></Form>
    </div>
  );
}

export default App;
