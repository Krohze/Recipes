const fetchRecipes = (searchTerm) => {
  const url = `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&number=1&apiKey=73d95ab19d8b46ccbc8ef8dda36c44f5`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};
export default fetchRecipes;
