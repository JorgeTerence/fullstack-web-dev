import { useState } from "react";

export default () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback! 🗒️</h1>
      <div>
        <button onClick={() => setGood(good + 1)}> good</button>
        <button onClick={() => setNeutral(neutral + 1)}> neutral</button>
        <button onClick={() => setBad(bad + 1)}> bad</button>
      </div>

      <h1>Statistics</h1>
      <Statistics {...{ good, neutral, bad }} />
    </div>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = () => good + neutral + bad;
  const average = () => ((good - bad) / total()).toFixed(2);
  const positive = () => ((good / total()) * 100).toFixed(2);

  if (!total()) return <p>No feedback given</p>;

  return (
    <div>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <br />
      <p>total: {total()}</p>
      <p>average: {average()}</p>
      <p>positive: {positive()}%</p>
    </div>
  );
};
