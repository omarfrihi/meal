import { useState } from "react";

const Card = ({ name, image, id }) => {
  const likedItems = JSON.parse(localStorage.getItem("favoris") || "[]");

  const [liked, setLiked] = useState(likedItems.includes(id));

  const onClickHearth = () => {
    const likedItems = JSON.parse(localStorage.getItem("favoris") || "[]");

    if (!liked) {
      setLiked(true);
      return localStorage.setItem(
        "favoris",
        JSON.stringify([...likedItems, id])
      );
    }
    setLiked(false);

    localStorage.setItem(
      "favoris",
      JSON.stringify(likedItems.filter((elem) => elem !== id))
    );
  };
  return (
    <div className="grid-item">
      <a href={`/details/${id}`}>
        <img src={image} alt="Placeholder Image" className="grid-image" />
      </a>

      <p className="grid-description">{name}</p>
      <button className="favorite-button" onClick={onClickHearth}>
        {liked ? <span>❤️</span> : <span>&#x1F90D;</span>}
      </button>
    </div>
  );
};
export default Card;
