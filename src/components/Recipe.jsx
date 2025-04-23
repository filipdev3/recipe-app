import Markdown from "react-markdown"

export default function Recipe(props){
    return (
        
        <section className="suggested-recipe-container" aria-live="polite">
            <h2>Chef Mistral Recommends: </h2>
            <Markdown>
                {props.recipe}
            </Markdown>
        </section>
    
    )
}