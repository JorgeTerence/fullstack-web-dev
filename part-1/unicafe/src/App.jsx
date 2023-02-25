import { useState } from "react";

export default () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = () => good + neutral + bad;

  return (
    <div>
      <h1>Give Feedback! 🗒️</h1>
      <div>
        <button onClick={() => setGood(good + 1)}> good</button>
        <button onClick={() => setNeutral(neutral + 1)}> neutral</button>
        <button onClick={() => setBad(bad + 1)}> bad</button>
      </div>

      <h1>Statistics</h1>
      <div>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
        <br />
        <p>total: {total()}</p>
        <p>average: {total() ? ((good - bad) / total()).toFixed(2) : 0}</p>
        <p>positive: {total() ? (good / total() * 100).toFixed(2) : ""}%</p>
      </div>
    </div>
  );
};
