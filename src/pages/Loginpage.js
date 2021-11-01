import { useState } from "react";
import axios from "axios";
//HTML
//<form>
//<label>+<input onChange>
//Button

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  console.log("form state", email, password);

  const onFormSubmit = async (event) => {
    event.preventDefault();
    console.log("hey i am submitingggg", email, password);
    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        email,
        password: password,
      });
      console.log("this is my response", response);
      setToken(response.data.token);
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div>
      <h1>This is my login page</h1>
      <form onSubmit={onFormSubmit}>
        <div>
          <label>EMAIL</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>PASSWORD</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
      {token}
    </div>
  );
};
export default LoginPage;
