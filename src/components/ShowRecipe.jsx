import recipes from '../recipes.js'

function NoRecipe() {
  return (
    <div>
      <h2>Welcome to the Kitchen!</h2>
      <p>The recipes here are designed to introduce the key concepts of REACT and typical structures we use while making apps.</p>
      <p>Work with each recipe by editing the file indicated on the recipe card, there is a solution in the same folder with the extension ".solution." for your reference.</p>
      <h3>Self Evaluation</h3>
      <p>Consider the following levels of achievement:</p>
      <ol>
        <li>Cut and paste the answer without thinking and move on - pretending you learned something</li>
        <li>Look directly at the answer code, read it and copy/paste the parts you need.</li>
        <li>Refer to REACT documentation or code examples from StackOverflow or GPT. Use those patterns to solve your problem</li>
        <li>Try your own solution using your memory and creativity, fall back to the previous level when the struggle becomes too great</li>
        <li>Your solutions typipcally work without spending too much time referring to documentation or samples - have a look at the sample code anyway and contrast the approach</li>
        <li>Creatively come up with multiple differents ways to accomplish your goal by changing the balance of the component hierarchy, JSX / CSS / JavaScript. Choose the ones that fits your situation the best.</li>
      </ol>
      <p>You can test your level again by discarding your changes to the files using git and starting over to see if your approach has changed.</p>
      <p>Today, try to get to operating at level 2-3.</p>
      <p>If you work with these topics every day, you will reach level 5 for all foundational topics here by the end of the program.  Strive to generally operate at level 4 when engaging new problems.</p>
    </div>
  )
}

function RecipePath({ path }) {
  return path && (
    <p>
       <code>Work with recipe in {path}</code>
    </p>
  )
}

export default function ShowRecipe({recipeTitle}) {
  const recipe = recipes.find(({ title }) => title === recipeTitle)
  const RecipeComponent = recipe?.component || NoRecipe
  return <>
    <RecipePath path={recipe?.path} />
    <RecipeComponent />
  </>
}
