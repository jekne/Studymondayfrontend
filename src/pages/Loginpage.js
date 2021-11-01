import { useState } from "react";
import axios from "axios";
//HTML
//<form>
//<label>+<input onChange>
//Button

const LoginPage = () => {
  return (
    <div>
      <h1>This is my login page</h1>
      <form>
        <div>
          <label>EMAIL</label>
          <input type="email" />
        </div>
        <div>
          <label>PASSWORD</label>
          <input type="password"></input>
        </div>
      </form>
    </div>
  );
};
export default LoginPage;
