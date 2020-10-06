import React, { useState } from "react";
import * as jokeService from "../services/joke";

function App() {
  const [jokes, setJokes] = useState([]);
  const [numberOfJokes, setNumberOfJokes] = useState(1);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const allJokes = await jokeService.getJokes({
        numberOfJokes,
        firstname,
        lastname,
      });
      setJokes(allJokes);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="numberOfJokes">Number of jokes:</label>
        <input
          id="numberOfJokes"
          type="number"
          min={1}
          placeholder="How many jokes do you want?"
          onChange={(e) => setNumberOfJokes(parseInt(e.target.value))}
          value={numberOfJokes}
        />
        <label htmlFor="firstname">Firstname:</label>
        <input
          id="firstname"
          type="text"
          placeholder="What is your firstname?"
          onChange={(e) => setFirstname(e.target.value)}
          value={firstname}
        />
        <label htmlFor="lastname">Lastname:</label>
        <input
          id="lastname"
          type="text"
          placeholder="What is your lastname?"
          onChange={(e) => setLastname(e.target.value)}
          value={lastname}
        />
        <input type="submit" value="get jokes" />
      </form>
      {jokes.map((joke) => (
        <div key={joke.id}>{joke.joke}</div>
      ))}
    </div>
  );
}

export default App;
