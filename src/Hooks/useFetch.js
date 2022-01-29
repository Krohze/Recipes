import { useState, useEffect } from "react/cjs/react.development";
import axios from "axios";

const sortByPopularity = `https://api.spoonacular.com/recipes/complexSearch?sort=popularity&number=24&apiKey=73d95ab19d8b46ccbc8ef8dda36c44f5`;
const dogAPI = "https://dog.ceo/api/breeds/image/random";

function useFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = `https://api.spoonacular.com/recipes/complexSearch?sort=popularity&number=24&addRecipeInformation=true&apiKey=73d95ab19d8b46ccbc8ef8dda36c44f5`;

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  const fetchRecipes = (searchTerm) => {
    const newUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&number=24&addRecipeInformation=true&apiKey=73d95ab19d8b46ccbc8ef8dda36c44f5`;

    setLoading(true);
    axios
      .get(newUrl)
      .then((response) => {
        console.log(response.data.results);
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { data, loading, error, fetchRecipes };
}

export default useFetch;
