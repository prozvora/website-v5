import React, { useState } from 'react'

import Layout from '../components/layout'
import RecipeDetail from '../components/recipe_detail'
import { recipeList } from '../../static/recipe_list'
import '../css/recipes.css'

const Recipes = () => {
  const [selectedRecipe, setSelectedRecipe] = useState()
  const [multiplier, setMultiplier] = useState(1)
  const handleChange = (e) => setMultiplier(e.target.value)
  return (
    <Layout>
      <h2>Recipes</h2>
      <label className='multiplier'>
        Multiply ingredient amounts:
        <input type='number' value={multiplier} onChange={handleChange} />
      </label>
      {Object.keys(recipeList).map((recipe) => (
        <button
          className='recipeButton'
          key={recipe}
          onClick={() => setSelectedRecipe(recipe)}
        >
          {recipeList[recipe].name}
        </button>
      ))}
      <RecipeDetail
        className='RecipeDetail'
        recipe={recipeList[selectedRecipe]}
        multiplier={multiplier}
      />
    </Layout>
  )
}

export default Recipes
