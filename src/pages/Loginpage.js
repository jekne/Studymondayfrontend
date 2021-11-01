import { useState } from "react";
import axios from "axios";
//HTML
//<form>
//<label>+<input onChange>
//Button

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log("form state", email, password);

  return (
    <div>
      <h1>This is my login page</h1>
      <form>
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
      </form>
    </div>
  );
};
export default LoginPage;
