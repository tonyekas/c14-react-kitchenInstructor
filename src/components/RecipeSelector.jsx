import './RecipeSelector.css'

export default function RecipeSelector({ recipes, setSelectedRecipeTitle }) {

  function updateRecipe(event) {
    setSelectedRecipeTitle(event.target.value)
  }

  return (
    <select className='recipe-select' onChange={updateRecipe}>
      <option name="">Welcome - Select a recipe here</option>
      {
        recipes.map(({ title, component }) => (
          <option key={title} value={title} disabled={ component===undefined }>
            {title}
          </option>
        ))
      }
    </select>
  )  
}
