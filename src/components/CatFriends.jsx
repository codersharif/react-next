import { useRef } from "react";

export default function CatFriends() {
  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);
  const itemRef = useRef(null);

  const getMap = () => {
    if (!itemRef.current) {
      itemRef.current = new Map();
    }
    return itemRef.current;
  };
  const scrollToId = (catId) => {
    const map = getMap();
    const node = map.get(catId);
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const handleScrollToSecondCat = () => {
    secondCatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const handleScrollToThirdCat = () => {
    thirdCatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <>
      <nav>
        <button onClick={() => scrollToId(0)}>Maru</button>
        <button onClick={() => scrollToId(5)}>Jellylorum</button>
        <button onClick={() => scrollToId(9)}>Tom</button>
        {/* <button onClick={handleScrollToSecondCat}>Maru</button>
        <button onClick={handleScrollToThirdCat}>Jellylorum</button> */}
      </nav>
      <div>
        <ul>
          {catList.map((cat) => (
            <li
              key={cat.id}
              ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(cat.id, node);
                } else {
                  map.delete(cat.id);
                }
              }}
            >
              <img src={cat.imageUrl} alt={"cat #" + cat.id} />
            </li>
          ))}
          <li>
            <img
              src="https://placekitten.com/g/200/200"
              alt="Tom"
              ref={firstCatRef}
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/300/200"
              alt="Maru"
              ref={secondCatRef}
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/250/200"
              alt="Jellylorum"
              ref={thirdCatRef}
            />
          </li>
        </ul>
      </div>
    </>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: "https://placekitten.com/250/200?image=" + i,
  });
}
