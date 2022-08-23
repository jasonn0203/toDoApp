import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header title="Jason's Day" />
        <Todo />
      </div>
    </div>
  );
}

export default App;
