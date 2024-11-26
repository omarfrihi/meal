import Card from "../components/card";
import { useSearchMeal } from "../hooks/meals";

const Popular = () => {
  const { isFetching, data, isError } = useSearchMeal("");
  if (isFetching) return <>Loading...</>;
  if (isError) return <>Error...</>;

  return (
    <div className="grid-container">
      {data?.data?.meals
        ?.slice(4, 8)
        .map(({ strMeal, strMealThumb, idMeal }) => (
          <Card key={idMeal} image={strMealThumb} name={strMeal} id={idMeal} />
        ))}
    </div>
  );
};

export default Popular;
