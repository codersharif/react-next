import { useState } from "react";

export default function Chat({ contact, onSetText }) {
  const [text, setText] = useState(contact.text);

  const handleChange = (e) => {
    setText(e.target.value);
    onSetText(contact, text);
  };
  return (
    <section className="chat">
      <textarea
        value={text}
        placeholder={"Chat to " + contact.name}
        onChange={handleChange}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}
