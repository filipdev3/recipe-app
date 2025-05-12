import { useEffect, useRef, useState } from "react"
import Recipe from "./Recipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from '../ai'

export default function MainContent() {

    const [recipe, setRecipe] = useState()
    const [ingredients, setIngredients] = useState([])
    const recipeSection = useRef(null)
    
    useEffect(() => {
        if(recipe !== "" && recipeSection.current !== null){
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipe])
    


    {/*function for adding ingredient*/}
    const addIngredient = (formData) => {
        const newIngredient = formData.get("ingredient").trim()
        setIngredients(prevIngredients => newIngredient !== '' ? [...prevIngredients, newIngredient] : prevIngredients)
    }


    {/*function for getting a recipe*/}
    async function getRecipe(){
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
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
                    ref = {recipeSection}
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                /> 
            :   
                <div> 
                    <h2>You have the ingredients but don't know what to cook?</h2> 
                    <p>Just enter the ingredients and leave the rest to us.</p> 
                </div>
            }


            {/*display Recipe component if recipe is truthy value (not undefined/null/empty string)*/}
            { recipe ? <Recipe recipe={recipe}/> : null }

        </main>
    )
}