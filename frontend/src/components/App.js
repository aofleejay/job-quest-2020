import React, { useState } from "react";
import Section from "./Section";
import Input from "./Input";
import Label from "./Label";
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
    <div className="w-full min-h-screen p-2 sm:pt-8 bg-gray-400">
      <div className="max-w-md mx-auto p-8 sm:p-16 shadow-md rounded bg-white">
        <h1 className="text-2xl mb-4">
          Chuck <span className="text-purple-500">Norris</span>'s Jokes
        </h1>
        <form onSubmit={onSubmit}>
          <Section>
            <Label htmlFor="firstname">Firstname</Label>
            <Input
              id="firstname"
              type="text"
              autoComplete="off"
              placeholder="What is your firstname?"
              onChange={(e) => setFirstname(e.target.value)}
              value={firstname}
            />
          </Section>
          <Section>
            <Label htmlFor="lastname">Lastname</Label>
            <Input
              id="lastname"
              type="text"
              autoComplete="off"
              placeholder="What is your lastname?"
              onChange={(e) => setLastname(e.target.value)}
              value={lastname}
            />
          </Section>
          <Section>
            <Label htmlFor="numberOfJokes">Number of jokes</Label>
            <Input
              id="numberOfJokes"
              type="number"
              min={1}
              placeholder="How many jokes do you want?"
              onChange={(e) => setNumberOfJokes(parseInt(e.target.value))}
              value={numberOfJokes}
            />
          </Section>
          <input
            type="submit"
            value="Get Jokes"
            className="text-white font-semibold bg-purple-500 hover:bg-purple-600 transition-colors duration-200 ease-in px-4 py-2 mt-4 rounded cursor-pointer focus:outline-none"
          />
        </form>
        {jokes.length > 0 && (
          <ul className="mt-8 pt-8 border-t border-gray-400">
            {jokes.map((joke) => (
              <li
                key={joke.id}
                className="list-inside list-disc text-gray-700 mb-4"
              >
                {joke.joke}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
