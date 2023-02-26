import { useState } from "react";
import anecdotes from "./assets/anecdotes.json";

export default () => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

  const draw = () => Math.floor(Math.random() * anecdotes.length);
  const vote = (i) => {
    const copy = [...points];
    copy[i]++;
    return () => setPoints(copy);
  };

  const max = () => Math.max(...points);
  const tied = () => points.filter((x) => x == max()).length - 1;

  return (
    <div>
      <h1>Anecdote of the day</h1>

      <p>{anecdotes[selected]}</p>
      <p>
        <code>Has {points[selected]} votes.</code>
      </p>

      <button onClick={() => setSelected(draw())}>Next</button>
      <button onClick={vote(selected)}>Vote</button>

      <h1>Most popular anecdote</h1>

      <p>{anecdotes[points.indexOf(max())]}</p>
      <p>
        <code>
          <span>Has {points[selected]} votes.</span>
          <span>{max() > 0 && tied() > 0 && ` Tied with other ${tied()}`}</span>
        </code>
      </p>
    </div>
  );
};
