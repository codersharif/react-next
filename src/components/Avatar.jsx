// export default function Avatar({ person, size }) {

//IF PASS THE SIZE VALUE IS undefined , THAN DEFAULT WORKING.
export default function Avatar({ person, color }) {
  //   const { person, size } = props; // Destructuring assignment
  return (
    <div>
      <h2 style={color}>Name: {person.name}</h2>
      <p>Age: {person.age}</p>
    </div>
  );
}
