import PropTypes from 'prop-types';
import React from 'react';

const formatNumber = number => {
  if (isNaN(number)) {
    return '';
  }
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
  }).format(number);
};

const IngredientDetail = ({multiplier, amount, measure, item, parens}) => (
  <li>
    {measure
      ? `${formatNumber(amount * multiplier)} ${measure} ${item}`
      : `${item}`}
    {parens && ` (${parens})`}
  </li>
);

IngredientDetail.propTypes = {
  multiplier: PropTypes.number.isRequired,
  amount: PropTypes.number,
  measure: PropTypes.string,
  item: PropTypes.string.isRequired,
  parens: PropTypes.string,
};

const RecipeDetail = ({recipe, multiplier}) => {
  return recipe ? (
    <div className="RecipeDetail">
      <h3>{recipe.name}</h3>
      <h4>Serves {recipe.serves * multiplier}</h4>
      <h4>Ingredients</h4>
      <p>Required:</p>
      <ul>
        {recipe.ingredients.required.map((el, i) => (
          <IngredientDetail key={i} multiplier={multiplier} {...el} />
        ))}
      </ul>
      {recipe.ingredients.optional.length > 0 && (
        <>
          <p>Optional:</p>
          <ul>
            {recipe.ingredients.optional.map((el, i) => (
              <IngredientDetail key={i} multiplier={multiplier} {...el} />
            ))}
          </ul>
        </>
      )}
      <h4>Steps:</h4>
      <ol>
        {recipe.steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
      {recipe.notes && (
        <>
          <h4>Notes:</h4>
          <p>{recipe.notes}</p>
        </>
      )}
    </div>
  ) : null;
};

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
};

RecipeDetail.defaultProps = {
  multiplier: 1,
};

export default RecipeDetail;
