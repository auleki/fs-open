import React from "react";

const Part = ({ part, exercise }) => {
  return (
    <React.Fragment>
      <p>
        {part} {exercise}
      </p>
    </React.Fragment>
  );
};

const Header = ({ course }) => {
  return (
    <React.Fragment>
      <h1>{course}</h1>
    </React.Fragment>
  );
};

const Content = ({ part1, part2, part3, exercises1, exercises2, exercises3 }) => {
  return (
    <React.Fragment>
      <Part part={part1} exercise={exercises1} />
      <Part part={part2} exercise={exercises2} />
      <Part part={part3} exercise={exercises3} />
    </React.Fragment>
  );
};

const Total = ({ exercises1, exercises2, exercises3 }) => {
  return (
    <React.Fragment>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </React.Fragment>
  );
};

function App() {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
        part1={part1}
        part2={part2}
        part3={part3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
}

export default App;
