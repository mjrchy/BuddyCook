
export interface Recipe {
  id: string;
  title: string;
  category: 'Breakfast' | 'Lunch' | 'Dinner' | 'Bakery';
  image: string;
  time: number; // in minutes
  difficulty: 'Beginner' | 'Intermediate' | 'Expert';
  calories: number;
  ingredients: {
    name: string;
    quantity: string;
  }[];
  instructions: string[];
  dietaryTags: string[];
  allergens?: string[];
}

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Burger',
    category: 'Dinner',
    image: 'burger.jpg',
    time: 30,
    difficulty: 'Beginner',
    calories: 550,
    ingredients: [
      { name: 'Ground beef', quantity: '500g' },
      { name: 'Burger buns', quantity: '4' },
      { name: 'Lettuce', quantity: '4 leaves' },
      { name: 'Tomato', quantity: '1 medium' },
      { name: 'Cheese slices', quantity: '4' },
      { name: 'Onion', quantity: '1 small' }
    ],
    instructions: [
      'Shape the ground beef into 4 patties.',
      'Season patties with salt and pepper.',
      'Grill the patties for 4-5 minutes on each side.',
      'Toast the buns lightly.',
      'Assemble burgers with lettuce, tomato, cheese, and onion.'
    ],
    dietaryTags: []
  },
  {
    id: '2',
    title: 'Spaghetti',
    category: 'Dinner',
    image: 'spaghetti.png',
    time: 25,
    difficulty: 'Beginner',
    calories: 450,
    ingredients: [
      { name: 'Spaghetti', quantity: '400g' },
      { name: 'Tomato sauce', quantity: '500ml' },
      { name: 'Garlic', quantity: '3 cloves' },
      { name: 'Onion', quantity: '1 medium' },
      { name: 'Olive oil', quantity: '2 tbsp' },
      { name: 'Parmesan cheese', quantity: '50g' }
    ],
    instructions: [
      'Cook spaghetti according to package instructions.',
      'Sauté garlic and onion in olive oil until translucent.',
      'Add tomato sauce and simmer for 10 minutes.',
      'Drain spaghetti and mix with sauce.',
      'Top with grated parmesan cheese.'
    ],
    dietaryTags: ['Vegetarian']
  },
  {
    id: '3',
    title: 'Fried Chicken',
    category: 'Dinner',
    image: 'fried_Chicken.jpg',
    time: 45,
    difficulty: 'Intermediate',
    calories: 650,
    ingredients: [
      { name: 'Chicken pieces', quantity: '8' },
      { name: 'Flour', quantity: '2 cups' },
      { name: 'Eggs', quantity: '2' },
      { name: 'Breadcrumbs', quantity: '1 cup' },
      { name: 'Oil for frying', quantity: '4 cups' },
      { name: 'Salt and pepper', quantity: 'to taste' }
    ],
    instructions: [
      'Season chicken pieces with salt and pepper.',
      'Coat in flour, then dip in beaten eggs, and coat in breadcrumbs.',
      'Heat oil to 350°F (175°C).',
      'Fry chicken pieces until golden brown and cooked through, about 15 minutes.',
      'Drain on paper towels before serving.'
    ],
    dietaryTags: [],
    allergens: ['Eggs', 'Wheat']
  },
  {
    id: '4',
    title: 'Pizza',
    category: 'Dinner',
    image: 'pizza.png',
    time: 40,
    difficulty: 'Intermediate',
    calories: 300,
    ingredients: [
      { name: 'Pizza dough', quantity: '1' },
      { name: 'Tomato sauce', quantity: '1/2 cup' },
      { name: 'Mozzarella cheese', quantity: '200g' },
      { name: 'Basil leaves', quantity: 'handful' },
      { name: 'Olive oil', quantity: '1 tbsp' }
    ],
    instructions: [
      'Preheat oven to 475°F (245°C).',
      'Roll out pizza dough on a floured surface.',
      'Spread tomato sauce over dough leaving a small border.',
      'Top with mozzarella cheese and basil leaves.',
      'Drizzle with olive oil and bake for 12-15 minutes until crust is golden.'
    ],
    dietaryTags: ['Vegetarian'],
    allergens: ['Milk', 'Wheat']
  },
  {
    id: '5',
    title: 'Salad',
    category: 'Lunch',
    image: 'salad.png',
    time: 15,
    difficulty: 'Beginner',
    calories: 200,
    ingredients: [
      { name: 'Mixed greens', quantity: '4 cups' },
      { name: 'Cherry tomatoes', quantity: '1 cup' },
      { name: 'Cucumber', quantity: '1 medium' },
      { name: 'Red onion', quantity: '1/4' },
      { name: 'Olive oil', quantity: '2 tbsp' },
      { name: 'Lemon juice', quantity: '1 tbsp' }
    ],
    instructions: [
      'Wash and dry all vegetables.',
      'Slice cucumber and quarter cherry tomatoes.',
      'Thinly slice red onion.',
      'Mix all vegetables in a large bowl.',
      'Whisk together olive oil and lemon juice.',
      'Drizzle dressing over salad and toss to coat.'
    ],
    dietaryTags: ['Vegan', 'Gluten-free', 'Low-carb', 'Low-fat', 'Vegetarian']
  },
  {
    id: '6',
    title: 'Sushi',
    category: 'Lunch',
    image: 'sushi.jpg',
    time: 60,
    difficulty: 'Expert',
    calories: 350,
    ingredients: [
      { name: 'Sushi rice', quantity: '2 cups' },
      { name: 'Nori sheets', quantity: '4' },
      { name: 'Cucumber', quantity: '1' },
      { name: 'Avocado', quantity: '1' },
      { name: 'Salmon', quantity: '200g' },
      { name: 'Rice vinegar', quantity: '2 tbsp' }
    ],
    instructions: [
      'Cook rice according to package instructions.',
      'Mix rice with rice vinegar and cool to room temperature.',
      'Place nori sheet on bamboo mat and spread rice evenly.',
      'Add fillings in a line across the center.',
      'Roll tightly and slice into pieces.'
    ],
    dietaryTags: ['Pescatarian'],
    allergens: ['Fish']
  }
];
