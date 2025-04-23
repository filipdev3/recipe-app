export default function IngredientsList(props){

    {/*mapping over ingredients array which is received trough props to create <li> DOM elements*/}
    const ingredientsList = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
   ))


    return(
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsList}</ul>

            {/*if number of ingredients are at least 4 display get-recipe-container, if isn't display how many ingredients user should enter to "unlock" button for generating recipe*/}
                {props.ingredients.length > 3 ? 
                    <div className="get-recipe-container">
                        <div>
                            <h3>Ready for recipe?</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button onClick={() => props.getRecipe(props.ingredients)} >Get a recipe</button>    
                    </div> 
                    : 
                    <h3 className="more-ingredients">You need to enter {4 - props.ingredients.length} more ingredients...</h3>}
                </section>
    )
}