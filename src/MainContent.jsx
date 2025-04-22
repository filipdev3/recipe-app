import { useState } from "react"
import Recipe from "./Recipe"
import IngredientsList from "./IngredientsList"

export default function MainContent() {

    const [ingredients, setIngredients] = useState([])

    const ingredientsList = ingredients.map(ingredient => (
         <li key={ingredient}>{ingredient}</li>
    ))

    const addIngredient = (formData) => {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    const [recipeShown, setRecipeShown] = useState(false)

    const getARecipe = () => {
        setRecipeShown(prevRecipe => !prevRecipe)
    }

    return (
        <main className="main-content">
            <form action={addIngredient} className="add-ingrediant-form">
                <input 
                type="text"
                placeholder="e.g. oregano"
                aria-label="Add ingradient"
                name="ingredient" 
                />
                <button>Add ingredient</button>
            </form>


            {/*display IngredientsList component if we have at least one ingredient*/}
        
            {ingredients.length > 0 ? 
                <IngredientsList 
                    ingredients={ingredients}
                    ingredientsList={ingredientsList}
                    getARecipe={getARecipe}
                /> 
            :   
                <div> 
                    <h2>You have the ingredients but don't know what to cook?</h2> 
                    <p>Just enter the ingredients and leave the rest to us.</p> 
                </div>
            }


            {/*placeholder for recipe from chef api*/}

            { recipeShown ? <Recipe /> : null }

        </main>
    )
}