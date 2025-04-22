export default function IngredientsList(props){
    return(
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{props.ingredientsList}</ul>
                {props.ingredients.length > 3 ? 
                    <div className="get-recipe-container">
                        <div>
                            <h3>Ready for recipe?</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button onClick={props.getARecipe} >Get a recipe</button>    
                    </div> 
                    : 
                    <h3 className="more-ingredients">You need to enter {4 - props.ingredients.length} more ingredients...</h3>}
                </section>
    )
}