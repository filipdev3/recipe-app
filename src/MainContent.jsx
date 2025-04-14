import { useState } from "react"

export default function MainContent() {

    const [ingredients, setIngredients] = useState([])

    const ingredientsList = ingredients.map(ingredient => (
         <li key={ingredient}>{ingredient}</li>
    ))

    const addIngredient = (formData) => {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
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
            
            {ingredients.length > 0 ? 
                <section>
                    <h2>Ingredients on hand:</h2>
                    <ul className="ingredients-list" aria-live="polite">{ingredientsList}</ul>
                    <div className="get-recipe-container">
                        <div>
                            <h3>Ready for recipe?</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button>Get a recipe</button>    
                    </div>
                </section> 
            :   
                <div> 
                    <h2>You have the ingredients but don't know what to cook?</h2> 
                    <p>Just enter the ingredients and leave the rest to us.</p> 
                </div>
            }

        </main>
    )
}