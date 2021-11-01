import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: 30 }}>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
