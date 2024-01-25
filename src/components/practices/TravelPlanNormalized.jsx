import { useState } from "react";
import { initialTravelPlan } from "../../data/places-normalized";
import PlaceTreeNormalized from "./PlaceTreeNormalized";

export default function TravelPlanNormalized() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];
  const planets = root.childIds;

  const handleOnComplete = (parentId, childId) => {
    const parent = plan[parentId];
    console.log(parent);
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId),
    };

    // console.log(nextParent);
    setPlan({
      ...plan,
      [parentId]: nextParent,
    });
  };

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planets.map((planetId) => (
          <PlaceTreeNormalized
            key={planetId}
            id={planetId}
            parentId={0}
            planetById={plan}
            onComplete={handleOnComplete}
          />
        ))}
      </ol>
    </>
  );
}
