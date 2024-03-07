import PropTypes from 'prop-types'
import React, { Fragment, useState } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const formatNumber = (number) => {
  if (isNaN(number)) {
    return ''
  }
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
  }).format(number)
}

const IngredientDetail = ({ multiplier, amount, measure, item, parens }) => (
  <li>
    {amount && measure
      ? `${formatNumber(amount * multiplier)} ${measure} ${item}`
      : amount
      ? `${formatNumber(amount * multiplier)} ${item}`
      : `${item}`}
    {parens && ` (${parens})`}
  </li>
)

IngredientDetail.propTypes = {
  multiplier: PropTypes.number.isRequired,
  amount: PropTypes.number,
  measure: PropTypes.string,
  item: PropTypes.string.isRequired,
  parens: PropTypes.string,
}

const RecipeDetail = ({ recipe, imageMap }) => {
  const [multiplier, setMultiplier] = useState(1)
  const handleChange = (e) => setMultiplier(e.target.value)
  return recipe ? (
    <div className='RecipeDetail'>
      {recipe.image && (
        <div className='recipeImage'>
          <GatsbyImage
            image={imageMap[recipe.image]}
            alt={recipe.name}
            placeholder='blurred'
            layout='constrained'
            width={200}
            height={200}
          />
        </div>
      )}
      <h3>{recipe.name}</h3>
      <label className='multiplier'>
        Multiply ingredient amounts:
        <input
          className='multiplierInput'
          type='number'
          value={multiplier}
          onChange={handleChange}
        />
      </label>
      <h4>Serves {recipe.serves * multiplier}</h4>
      {recipe.notes && (
        <>
          <h4>Notes:</h4>
          <p>{recipe.notes}</p>
        </>
      )}
      <h4>Ingredients</h4>
      {recipe.ingredients.components.map((component) => (
        <Fragment key={component.heading || recipe.name}>
          {component.heading && <h4>{component.heading}</h4>}
          <p>Required:</p>
          <ul>
            {component.required.map((req, i) => (
              <IngredientDetail key={i} multiplier={multiplier} {...req} />
            ))}
          </ul>
          {component.optional?.length > 0 && (
            <>
              <p>Optional:</p>
              <ul>
                {component.optional.map((opt, i) => (
                  <IngredientDetail key={i} multiplier={multiplier} {...opt} />
                ))}
              </ul>
            </>
          )}
        </Fragment>
      ))}

      <h4>Steps:</h4>
      <ol>
        {recipe.steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </div>
  ) : null
}

RecipeDetail.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string,
    serves: PropTypes.number,
    ingredients: PropTypes.shape({
      required: PropTypes.arrayOf(PropTypes.object),
      optional: PropTypes.arrayOf(PropTypes.object),
    }),
    steps: PropTypes.arrayOf(PropTypes.string),
    notes: PropTypes.string,
  }),
  multiplier: PropTypes.number,
}

RecipeDetail.defaultProps = {
  multiplier: 1,
}

export default RecipeDetail
