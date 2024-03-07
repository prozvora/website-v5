export const recipeList = {
  chickenTikkaMasala: {
    name: 'Chicken Tikka Masala',
    image: 'chicken_tikka_masala',
    serves: 4,
    ingredients: {
      components: [
        {
          heading: 'Chicken',
          required: [
            {
              item: 'chicken breast',
              amount: 600,
              measure: 'g',
              parens: 'cut into 1/2 inch cubes',
            },
            {
              item: 'plain greek yogurt',
              amount: 0.75,
              measure: 'cups',
              parens: 'vanilla will work if that is all you have',
            },
            {
              item: 'garlic',
              amount: 5,
              measure: 'cloves',
              parens: 'minced',
            },
            {
              item: 'ginger',
              amount: 1,
              measure: 'tbsp',
              parens: 'minced',
            },
            {
              item: 'garam masala',
              amount: 1,
              measure: 'tsp',
            },
            {
              item: 'cumin',
              amount: 1,
              measure: 'tsp',
            },
            {
              item: 'chili powder',
              amount: 0.5,
              measure: 'tsp',
            },
            {
              item: 'salt',
              amount: 1,
              measure: 'tsp',
            },
          ],
          optional: [{ item: 'turmeric' }],
        },
        {
          heading: 'Tikka Masala',
          required: [
            {
              item: 'coconut or avocado oil',
              amount: 2,
              measure: 'tbsp',
            },
            {
              item: 'vidalia onion',
              amount: 100,
              measure: 'g',
              parens: '100g is about half an onion',
            },
            {
              item: 'potato',
              amount: 3,
              parens: 'cubed, 1/4 to 1/2 inch',
            },
            {
              item: 'garlic',
              amount: 3,
              measure: 'cloves',
            },
            {
              item: 'chickpeas',
              amount: 1,
              measure: '15.5 oz can',
              parens: 'drained',
            },
            {
              item: 'crushed tomato',
              amount: 1,
              measure: '15.5 oz can',
            },
            {
              item: 'heavy cream or coconut milk/cream',
              amount: 1,
              measure: 'cup',
            },
            {
              item: 'garam masala',
              amount: 1.5,
              measure: 'tbsp',
            },
            {
              item: 'cumin',
              amount: 2,
              measure: 'tsp',
            },
            {
              item: 'coriander powder',
              amount: 1,
              measure: 'tsp',
            },
            {
              item: 'paprika',
              amount: 1,
              measure: 'tsp',
            },
            {
              item: 'cinnamon',
              amount: 0.25,
              measure: 'tsp',
            },
            {
              item: 'nutmeg',
              amount: 0.25,
              measure: 'tsp',
            },
            {
              item: 'cayenne pepper',
              amount: 0.25,
              measure: 'tsp',
            },

            {
              item: 'salt and pepper',
              parens: 'to taste',
            },
            { item: 'jasmine or bismati rice', amount: 1, measure: 'cup' },
            { item: 'naan', parens: 'toasted' },
          ],
          optional: [{ item: 'turmeric' }],
        },
      ],
    },
    steps: [
      'In a large bowl, mix together yogurt, minced garlic, minced ginger, garam masala, cumin, chili powder, and salt.',
      'Trim and cube raw chicken breasts.',
      'Add cubed chicken to the marinade. Mix until the cubes are evenly coated. Cover and refrigerate 2-4 hours.',
      'Peel and dice potatoes. Parboil the potatoes until they are about halfway done. Drain and set aside to allow them to dry out.',
      'Cook rice separately.',
      'In a large pot on medium-high heat, saute onion and dried potato cubes for about 5 minutes, until onion is translucent and potato cubes have some crisp.',
      'Add minced garlic and drained chickpeas, saute 2 more minutes.',
      'Reduce heat to low-medium. Add crushed tomatoes and cream, stir to combine. Use a wooden or plastic spatula to scrape potato and onion off the bottom of the pot.',
      'Mix in garam masala, cumin, coriander, paprika, cinnamon, nutmeg, and cayenne.',
      'Stir and allow the sauce to thicken, then reduce heat to low.',
      'In a separate pan, cook the chicken cubes fully, in batches if necessary. Do not crowd the pan -- the marinade and juices should mostly evaporate and give you a good crust.',
      'Mix the cooked chicken into the sauce.',
      'Season the sauce to taste with salt, pepper and any other spices.',
      'Serve with rice and naan.',
      'Enjoy!',
    ],
    notes:
      "I usually double this recipe because I buy the big cans of tomato and coconut milk. I didn't have turmeric, so it's listed as optional. Add it if you have it. If you have a grill, you can skewer the chicken cubes and grill them instead of pan searing.",
  },
  beanDip: {
    name: 'Black Bean Dip',
    serves: 2,
    ingredients: {
      components: [
        {
          required: [
            { item: 'olive oil', amount: 2, measure: 'tbsp' },
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
            {
              item: 'cheddar cheese',
              amount: 1,
              measure: 'cup',
              parens: 'shredded',
            },
            { item: 'lime juice', amount: 1, measure: 'oz' },
          ],
          optional: [
            { item: 'corn', amount: 0.5, measure: '14 oz can' },
            {
              item: 'cilantro',
              amount: 5,
              measure: 'leaves',
              parens: 'garnish',
            },
          ],
        },
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
    notes: 'I usually double this recipe to use the whole can of corn.',
  },
  pulledCarrots: {
    name: 'Pulled Carrots',
    serves: 4,
    ingredients: {
      components: [
        {
          required: [
            { item: 'olive oil', amount: 2, measure: 'tbsp' },
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
      ],
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
    notes:
      'You can use cooked shredded chicken breast or thigh instead of the canned chicken, but I find that using the precooked chicken allows me to prep this in 10-15 minutes.',
    ingredients: {
      components: [
        {
          required: [
            {
              item: 'cooked chunk chicken',
              amount: 2,
              measure: '12.5 oz can',
            },
            {
              item: 'cream cheese',
              amount: 12,
              measure: 'oz',
              parens: 'softened',
            },
            {
              item: 'blue cheese',
              amount: 0.75,
              measure: 'cup',
            },
            {
              item: `Frank's Red Hot`,
              amount: 1.125,
              measure: 'cup',
            },

            {
              item: 'cheddar cheese',
              amount: 2.25,
              measure: 'cup',
              parens: 'shredded',
            },
            {
              item: 'salt',
              amount: 0.5,
              measure: 'tsp',
            },
            {
              item: 'pepper',
              amount: 0.5,
              measure: 'tsp',
            },
            {
              item: 'garlic powder',
              amount: 0.5,
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
  crepes: {
    name: 'Crepes',
    image: 'crepe',
    serves: 4,
    ingredients: {
      components: [
        {
          required: [
            { item: 'butter', amount: 4, measure: 'tbsp', parens: 'melted' },
            {
              item: 'flour',
              amount: 1,
              measure: 'cup',
            },
            {
              item: 'eggs',
              amount: 4,
            },
            {
              item: 'milk',
              amount: 1.5,
              measure: 'cup',
              parens: 'shredded',
            },

            {
              item: 'vanilla',
              amount: 2,
              measure: 'tsp',
            },
            {
              item: 'sugar',
              amount: 1,
              measure: 'tbsp',
              parens: 'to taste',
            },
            {
              item: 'salt',
              amount: 1,
              measure: 'pinch',
            },
          ],
          optional: [
            {
              item: 'whipped cream',
            },
            {
              item: 'nutella',
            },
            {
              item: 'strawberry',
            },
            {
              item: 'banana',
            },
            {
              item: 'blueberry',
            },
            {
              item: 'raspberry',
            },
          ],
        },
      ],
    },
    steps: [
      'Melt butter.',
      'Combine butter and flour in a large bowl. Whisk until there are no clumps of flour remaining.',
      'Add eggs, milk, vanilla, sugar, and salt to batter. Whisk to combine.',
      'Heat a nonstick pan on low-medium heat.',
      'Pour batter into heated pan until it covers 2/3 the diameter.',
      'Tilt and swirl the pan until the batter thinly coats the bottom.',
      'Cook the crepe for about a minute, until the top starts to lose its glossy shine.',
      'Flip the crepe with a large spatula. Cook 45 seconds to a minute longer.',
      'Remove the crepe from the pan, and repeat for the remaining batter.',
      'Prepare crepe toppings (see optional ingredients).',
      'For nutella, heat water in a medium bowl to about 140 degrees F. Place the jar into the water to soften the nutella, for easy spreading.',
      'Assemble crepes.',
      'Enjoy!',
    ],
  },
}

export default recipeList
