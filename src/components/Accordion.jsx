import { useState } from "react";
import Panel from "./Panel";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="Home"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        {" "}
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="About"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        {" "}
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
    </>
  );
}
