export default function MainContent() {
    return (
        <main className="main-content">
            <form className="add-ingrediant-form">
                <input 
                type="text"
                placeholder="e.g. oregano"
                aria-label="Add ingradient" 
                />
                <button>Add ingredient</button>
            </form>
        </main>
    )
}