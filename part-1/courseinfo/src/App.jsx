export default () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Header = ({ title }) => <h1>{title}</h1>;

const Content = ({ parts }) => (
  <div>
    {parts.map((part, i) => (
      <Part key={i} part={part} />
    ))}
  </div>
);

const Part = ({ part }) => (
  <p>
    {part.name} - {part.exercises}
  </p>
);

const Total = ({ parts }) => {
  const total = parts.map((p) => p.exercises).reduce((a, b) => a + b);
  return <p>Number of exercises {total}</p>;
};
