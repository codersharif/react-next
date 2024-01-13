//NAMED
export function Image() {
  return (
    <img
      src="https://avatars.githubusercontent.com/u/39433512?v=4"
      alt="Katherine Johnson"
    />
  );
}

//DEFAULT
export default function Profile() {
  return (
    <div>
      <h1>Shariful Islam Khan</h1>
      <Image />
    </div>
  );
}
