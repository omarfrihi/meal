import { useState } from "react";
import { useSearchMeal } from "../hooks/meals";
import Card from "../components/card";

const Home = () => {
  const [search, setSearch] = useState("");

  const { isFetching, data, isError } = useSearchMeal(search);
  return (
    <>
      <div className="background-image">
        <div className="column-layout">
          <h1 className="title">Good food choices are good investments</h1>
          <p className="description">
            This is a powerful need for symbolism , and that means the
            architecture must have somthing appeeals the human heart
          </p>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              onChange={(event) => setSearch(event.target.value)}
            />
            <button className="search-button">🔍</button>
          </div>
          <div className="button-group">
            <button className="action-button">Menu</button>
            <button className="action-button">watch our menu</button>
          </div>
        </div>
      </div>
      <div className="grid-container">
        {data?.data?.meals?.map(({ strMeal, strMealThumb, idMeal }) => (
          <Card key={idMeal} image={strMealThumb} name={strMeal} id={idMeal} />
        ))}
      </div>
    </>
  );
};

export default Home;
