import { useState } from 'react'
import recipes from './recipes.js'

import RecipeSelector from './components/RecipeSelector'
import ShowRecipe from './components/ShowRecipe.jsx'

import './App.css'

function App() {
  const [selectedRecipeTitle, setSelectedRecipeTitle] = useState()

  return (
    <div>
      <h1>The React Kitchen</h1>
      <RecipeSelector { ...{recipes, setSelectedRecipeTitle}} />
      <ShowRecipe recipeTitle={selectedRecipeTitle}/>
    </div>
  )
}

export default App
