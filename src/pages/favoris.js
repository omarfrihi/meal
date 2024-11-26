import Card from "../components/card";
import { useSearchMeal } from "../hooks/meals";

const Favoris = () => {
  const { isFetching, data, isError } = useSearchMeal("");
  if (isFetching) return <>Loading...</>;
  if (isError) return <>Error...</>;

  return (
    <div className="grid-container">
      {data?.data?.meals
        ?.filter(({ idMeal }) => {
          const likedItems = JSON.parse(
            localStorage.getItem("favoris") || "[]"
          );

          return likedItems.includes(idMeal);
        })
        .map(({ strMeal, strMealThumb, idMeal }) => (
          <Card key={idMeal} image={strMealThumb} name={strMeal} id={idMeal} />
        ))}
    </div>
  );
};

export default Favoris;
