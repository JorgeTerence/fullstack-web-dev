export default () => {
  const parts = [
    { title: "Fundamentals of React", ex: 10 },
    { title: "Using props to pass data", ex: 7 },
    { title: "State of a component", ex: 14 },
  ];

  const course = "Half Stack application development";

  return (
    <div>
      <Header title={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

const Header = ({ title }) => <h1>{title}</h1>;

const Content = ({ parts }) => (
  <div>
    {parts.map((part, i) => <Part key={i} part={part} />)}
  </div>
);

const Part = ({ part }) => (
  <p>{part.title} - {part.ex}</p>
);

const Total = ({ parts }) => {
  const total = parts.map((p) => p.ex).reduce((a, b) => a + b);
  return (
    <p>Number of exercises {total}</p>
  );
}
