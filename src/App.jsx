const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];

function App() {
  // const chemist = people
  //   .filter((person) => person.profession === "chemist")
  //   .map((person) => <li key={person.id}>{person.name}</li>);
  const chemist = people.filter((person) => person.profession === "chemist");

  const listItem = chemist.map((person) => (
    <li key={person.id}>{person.name}</li>
  ));

  return (
    <div>
      <ul>{listItem}</ul>
    </div>
  );
}

// const poem = {
//   lines: [
//     "I write, erase, rewrite",
//     "Erase again, and then",
//     "A poppy blooms.",
//   ],
// };

// function App() {
//   let output = [];

//   poem.lines.forEach((line, i) => {
//     output.push(<hr key={i + "-separator"} />);
//     output.push(<p key={i + "-test"}>{line}</p>);
//   });
//   output.shift();
//   return <article>{output}</article>;
// }

export default App;
