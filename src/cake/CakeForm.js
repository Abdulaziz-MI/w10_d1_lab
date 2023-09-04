import React from 'react';
import { useState } from 'react';
const CakeForm = () => {

    const [cakeName, setCakeName] = useState("")
    const [ingredients, setIngredients] = useState([]);
    const [price, setPrice] = useState("")
    const [rating, setRating] = useState("")
    


    const getIngredients = () => {

    }

return(

<div>

<h1>Create a Cake</h1>

<form>

<label htmlFor="cakeName">Cake Name:</label>
<input
    type='text'
    name="cakeName"
    value={cakeName}
    onChange={(e) => {
        setCakeName(e.target.value)
    }}
/>


    <label htmlFor="ingredient">Ingredients:</label>
        <input
            type="text"
            id="ingredient"
            name="ingredient"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value.split(", ") )}
        />

        
    <label htmlFor="ingredient">Ingredients:</label>
        <input
            type="text"
            id="ingredient"
            name="ingredient"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value.split(", ") )}
        />



</form>
</div>)
}
export default CakeForm;