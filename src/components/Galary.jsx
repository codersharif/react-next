import Profile from "./Profile"; //IMPORT DEFAULT COMPONENTS

//NAMED EXPORT
/*
export function Profile() {
  return (
    <div>
      <h1>Shariful Islam Khan</h1>
      <img
        src="https://avatars.githubusercontent.com/u/39433512?v=4"
        alt="Katherine Johnson"
      />
    </div>
  );
}
*/
//DEFAULT EXPORT
export default function Galary() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
