import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import LoginPage from "./pages/Loginpage";
import HomePage from "./pages/Homepage";

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
      <Switch>
        <Route path="/login" render={() => <LoginPage />} />
        <Route path="/" render={() => <HomePage />} />
      </Switch>
    </div>
  );
}

export default App;
