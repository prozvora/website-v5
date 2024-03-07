import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import RecipeDetail from '../components/recipe_detail'
import { recipeList } from '../../static/recipe_list'
import '../css/recipes.css'

const Recipes = () => {
  const [selectedRecipe, setSelectedRecipe] = useState()
  const [imageMap, setImageMap] = useState({})

  const imageData = useStaticQuery(graphql`
    query ImageQuery {
      allImageSharp {
        nodes {
          gatsbyImageData
          parent {
            ... on File {
              id
              name
            }
          }
        }
      }
    }
  `)

  useEffect(() => {
    imageData.allImageSharp.nodes.forEach((node) => {
      const newImage = { [node.parent.name]: node.gatsbyImageData }
      setImageMap((imageMap) => ({
        ...imageMap,
        ...newImage,
      }))
    })
  }, [imageData])

  return (
    <Layout>
      <h2>Recipes</h2>
      <div className='buttonSection'>
        {Object.keys(recipeList).map((recipe) => (
          <button
            className='recipeButton'
            key={recipe}
            onClick={() => setSelectedRecipe(recipe)}
          >
            {recipeList[recipe].name}
          </button>
        ))}
      </div>
      <RecipeDetail
        className='RecipeDetail'
        recipe={recipeList[selectedRecipe]}
        imageMap={imageMap}
      />
    </Layout>
  )
}

export default Recipes
