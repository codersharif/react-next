import { useContext } from "react";
import { IntLevelContext } from "../../contexts/IntLevelContext";

export default function Section({ children, isFancy }) {
  const level = useContext(IntLevelContext);
  return (
    <section className={"section " + (isFancy ? "fancy" : "")}>
      <IntLevelContext.Provider value={level + 1}>
        {children}
      </IntLevelContext.Provider>
    </section>
  );
}
