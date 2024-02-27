export const recipeList = {
  beanDip: {
    name: 'Black Bean Dip',
    serves: 2,
    ingredients: {
      required: [
        {item: 'olive oil', amount: 2, measure: 'tbsp'},
        {
          item: 'vidala onion',
          amount: 0.5,
          measure: '',
          parens: 'diced',
        },
        {
          item: 'garlic',
          amount: 2,
          measure: 'cloves',
          parens: 'minced',
        },
        {
          item: 'diced tomatoes and green chiles',
          amount: 1,
          measure: '10 oz can',
          parens: 'drained',
        },
        {
          item: 'salsa',
          amount: 0.5,
          measure: 'cup',
        },
        {
          item: 'chili powder',
          amount: 1,
          measure: 'tbsp',
        },
        {
          item: 'cumin',
          amount: 1,
          measure: 'tsp',
        },
        {
          item: 'black beans',
          amount: 1,
          measure: '15.5 oz can',
          parens: 'partially mashed',
        },
        {item: 'cheddar cheese', amount: 1, measure: 'cup', parens: 'shredded'},
        {item: 'lime juice', amount: 1, measure: 'oz'},
      ],
      optional: [
        {item: 'corn', amount: 0.5, measure: '14 oz can'},
        {item: 'cilantro', amount: 5, measure: 'leaves', parens: 'garnish'},
      ],
    },
    steps: [
      'Heat olive oil in nonstick pot over medium heat.',
      'Add diced onion, and sautee until translucent.',
      'Add minced garlic, and sautee for a minute.',
      'Add diced tomatoes and green chiles. Stir.',
      'Add salsa, chili powder, and cumin. Stir.',
      'Mash the beans in the can with a fork, and add. Stir.',
      'Add corn and lime juice.',
      'Stir while dip heats through.',
      'Stir in 1/2 to 2/3 of the cheese.',
      'Pour dip into serving dish.',
      'Top with remaining cheese and cilantro.',
      'Serve with tortilla chips.',
      'Enjoy!',
    ],
    notes: 'Use a half can of corn for every can of beans.',
  },
  pulledCarrots: {
    name: 'Pulled Carrots',
    serves: 4,
    ingredients: {
      required: [
        {item: 'olive oil', amount: 2, measure: 'tbsp'},
        {
          item: 'vidala onion',
          amount: 0.5,
          measure: '',
          parens: 'thinly sliced, root to stem',
        },
        {
          item: 'carrots',
          amount: 4,
          measure: '',
          parens: 'shredded',
        },
        {
          item: 'salt',
          amount: 1,
          measure: 'tsp',
          parens: 'to taste',
        },
        {
          item: 'pepper',
          amount: 1,
          measure: 'tsp',
          parens: 'to taste',
        },
        {
          item: 'Buns',
          amount: 4,
          measure: '',
        },
        {
          item: 'BBQ sauce',
          measure: '',
          parens: 'to taste',
        },
      ],
      optional: [],
    },
    steps: [
      'Preheat oven to 385 degrees F.',
      'Prepare roasting pan. Line with parchment paper.',
      'Shred carrots with the coarse side of the shredder.',
      'Cut onions into thin strips, cutting from root to stem.',
      'Add carrots and onions to roasting pan.',
      'Drizzle with olive oil. Season with salt and pepper.',
      'Toss carrots and onions until evenly coated.',
      'Cover roasting pan with aluminum foil.',
      'Bake for 20 minutes.',
      'Remove foil. Bake 10 more minutes.',
      'Remove from oven. Slide pulled carrots into a large bowl.',
      'Pour in BBQ sauce. Mix.',
      'Toast bun, if desired. Assemble sandwich.',
      'Enjoy!',
    ],
  },
  wingDip: {
    name: 'Buffalo Wing Dip',
    serves: 4,
    ingredients: {
      required: [
        {
          item: 'cooked chunk chicken',
          amount: 1,
          measure: '12.5 oz can',
        },
        {
          item: 'cream cheese',
          amount: 8,
          measure: 'oz',
          parens: 'softened',
        },
        {
          item: 'blue cheese',
          amount: 0.5,
          measure: 'cup',
        },
        {
          item: `Frank's Red Hot`,
          amount: 0.75,
          measure: 'cup',
        },

        {
          item: 'cheddar cheese',
          amount: 1.5,
          measure: 'cup',
          parens: 'shredded',
        },
        {
          item: 'salt',
          amount: 0.25,
          measure: 'tsp',
        },
        {
          item: 'pepper',
          amount: 0.25,
          measure: 'tsp',
        },
        {
          item: 'garlic powder',
          amount: 0.25,
          measure: 'tsp',
        },
      ],
      optional: [
        {
          item: 'tortilla chips',
        },
        {
          item: 'celery sticks',
        },
      ],
    },
    steps: [
      'Preheat oven to 350 degrees F.',
      'Add cream cheese to medium bowl. Beat with back of spoon until soft.',
      'Add chicken and mix in.',
      'Mix in blue cheese and Red Hot.',
      'Mix in 2/3 of the cheese. Set aside 1/3 for topping.',
      'Add salt, pepper, and garlic powder. Add more or less, to taste.',
      'Pour dip into baking dish, and top with remaining 1/3 of cheese.',
      'Bake 15-18 minutes, until hot and bubbly.',
      'Serve with tortilla chips, celery, etc.',
      'Enjoy!',
    ],
  },
};

export default recipeList;
