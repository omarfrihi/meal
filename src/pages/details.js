import { useParams } from "react-router";
import { useDetails } from "../hooks/meals";

const Details = () => {
  const { id } = useParams();

  const { data, isFetching, isError } = useDetails(id);
  const detail = data?.data?.meals?.[0];
  if (isFetching) return <>Loading...</>;
  if (isError) return <>Error...</>;

  return (
    <div className="details-container">
      <div className="flex-row">
        <div className="image-container">
          <img src={detail?.strMealThumb} alt="Image" className="image" />
        </div>
        <div className="text-container">
          <h2>{detail?.strMeal}</h2>
          <p>
            Instruction:
            {detail?.strInstructions}
          </p>
          <p>
            <h3>Categoie:{detail?.strCategory}</h3>
            <h3>Region:{detail?.strArea}</h3>
          </p>
          <p>
            <h2>Ingredients:</h2>
            <ul>
              {Array.from({ length: 20 }, (_, i) => i + 1).map((elem) => {
                const ingr = detail?.[`strIngredient${elem}`];

                return ingr ? <li key={ingr}>{ingr}</li> : <></>;
              })}
            </ul>
          </p>
        </div>
      </div>

      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src={detail?.strYoutube}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Details;
