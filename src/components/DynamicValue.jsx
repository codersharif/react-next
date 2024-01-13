const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

export default function DynamicValue() {
  const avatar =
    "https://t3.ftcdn.net/jpg/00/17/30/74/360_F_17307408_RcdYtwlTOMmQAqqqYLZkJBDgb1SKHOXZ.jpg";
  const description = "Gregorio Y. Zara";
  const name = "Gregorio Y. Zara";

  return (
    <>
      <h1>Reference a JavaScript variable inside JSX with curly braces</h1>
      <h3>{name}'s To Do List</h3>
      <h4>To Do List for {formatDate(today)}</h4>
      <img className="avatar" src={avatar} alt={description} />

      <ul
        style={{
          backgroundColor: "black",
          color: "pink",
        }}
      >
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>

      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img className="avatar" src={avatar} alt="Gregorio Y. Zara" />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    </>
  );
}
