import Card from "./components/Card";
import Profile from "./components/Profile";

// assing Props to a Component
// Forwarding props with the JSX spread synta
{
  /* 
  function App() {
    return (
      <>
        <Profile
          person={{ name: "Sharif", age: "25" }}
          color={{ color: "red" }}
        />
      </>
    );
  }
  
  */
}

//Passing JSX as children
function App() {
  return (
    <>
      <Card>
        <Profile
          person={{ name: "React", age: "12" }}
          color={{ color: "red" }}
        />
      </Card>
    </>
  );
}

export default App;
