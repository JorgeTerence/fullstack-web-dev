import { useState } from "react";

export default () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const inc = (fn, state) => () => fn(state + 1);

  return (
    <div>
      <h1>Give Feedback! 🗒️</h1>
      <div>
        <Button name="good" callback={inc(setGood, good)} />
        <Button name="neutral" callback={inc(setNeutral, neutral)} />
        <Button name="bad" callback={inc(setBad, bad)} />
      </div>

      <h1>Statistics</h1>
      <Statistics {...{ good, neutral, bad }} />
    </div>
  );
};

const Button = ({ name, callback, classname }) => (
  <button className={name} onClick={callback}>
    {name}
  </button>
);

const Statistics = ({ good, neutral, bad }) => {
  const total = () => good + neutral + bad;
  const average = () => ((good - bad) / total()).toFixed(2);
  const positive = () => ((good / total()) * 100).toFixed(2);

  if (!total()) return <p>No feedback given</p>;

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Total" value={total()} />
          <StatisticLine text="Average" value={average()} />
          <StatisticLine text="Positive" value={positive()} percentage />
        </tbody>
      </table>
    </div>
  );
};

const StatisticLine = ({ text, value, percentage }) => (
  <tr>
    <td>
      <b>{text}</b>
    </td>
    <td>
      <code>
        {value}
        {percentage && "%"}
      </code>
    </td>
  </tr>
);
