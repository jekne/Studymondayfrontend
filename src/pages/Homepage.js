import { useEffect, useState } from "react";
import axios from "axios";
// obj
//fetch the players
//
const HomePage = () => {
  useEffect(() => {
    console.log("done rendering!");

    const fetchPlayers = async () => {
      try {
        const response = await axios.get("http://localhost:4000/players");
        console.log("this is my responseeeee", response.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchPlayers();
  });
  return (
    <div>
      <h1>This is my Home Page</h1>
    </div>
  );
};
export default HomePage;
