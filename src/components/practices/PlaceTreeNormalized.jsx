export default function PlaceTreeNormalized({
  id,
  planetById,
  parentId,
  onComplete,
}) {
  const place = planetById[id];
  const childIds = place.childIds;
  return (
    <li>
      {place.title}{" "}
      <button onClick={() => onComplete(parentId, id)}>Complete</button>
      {childIds.length > 0 && (
        <ol>
          {childIds.map((childId) => (
            <PlaceTreeNormalized
              key={childId}
              id={childId}
              parentId={id}
              planetById={planetById}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </li>
  );
}
