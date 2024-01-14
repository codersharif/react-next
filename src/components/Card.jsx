const style = {
  width: "fit-content",
  margin: "5px",
  padding: "5px",
  fontSize: "20px",
  textAlign: "center",
  border: "1px solid #aaa",
  borderRadius: "20px",
  background: "#fff",
};

export default function Card({ children }) {
  return (
    <>
      <div style={style}>{children}</div>
    </>
  );
}
