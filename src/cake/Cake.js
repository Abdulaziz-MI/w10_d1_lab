
const Cake = ({cake}) => {

  const ingredientsComponents = cake.ingredients.map((ingredient, index) => {
    return <li key={index}> {ingredient}</li>
  });


  return (
    <>
        <h2>{cake.cakeName}</h2>
        <p> Ingredient</p>
        <ul>
       {ingredientsComponents}
        </ul>
        <p>Rating: {cake.rating}/10</p>
        <p> Price: £{cake.price}</p>
    </>
  )
}

export default Cake;