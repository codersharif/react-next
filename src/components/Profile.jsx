import Avatar from "./Avatar";

// export default function Profile() {
//   return (
//     <>
//       {/* <Avatar person={{ name: "Sharif", imgId: "123" }} size={50} /> */}
//       {/* <Avatar person={{ name: "Sharif", imgId: "123" }} size={undefined} /> */}
//     </>
//   );
// }

// Forwarding props with the JSX spread syntax

export default function Profile(props) {
  return (
    <>
      <Avatar {...props} />
    </>
  );
}
