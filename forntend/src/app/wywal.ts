import {Dish} from "./Model/Dish";

export const DISHES: Dish[] = [
  {
    _id: '1',
    name: 'Tacos',
    description: 'Tacos are a traditional Mexican dish composed of a corn or wheat tortilla folded or rolled around a filling.',
    images: [
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg?w=2000',
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000',
      'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg'],
    cuisine: 'Mexican',
    category: 'meat',
    type: 'Meat',
    price: 10,
    quantity: 10,
    ingredients: ['Tomato', 'Cheese', 'Meat'],
    // comments: [
    //   {
    //     rating: 5,
    //     comment: 'The best pizza I have ever eaten!',
    //     _id: '1',
    //   },
    //   {
    //     rating: 3,
    //     comment: 'Average pizza',
    //     _id: '2',
    //   },]
  },
  {
    _id: '2',
    name: 'Burger',
    description: 'A hamburger (also burger for short) is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, barbecued, or flame broiled. Hamburgers are often served with cheese, lettuce, tomato, onion, pickles, bacon, or chiles. A hamburger topped with cheese is called a cheeseburger. Hamburgers are often served with french fries, potato chips, or onion rings. A hamburger made from ground chicken is called a chicken burger or chicken sandwich.',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/1200px-RedDot_Burger.jpg',
      'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      'https://img.freepik.com/free-photo/front-view-tasty-meat-burger-with-cheese-salad-dark-background_140725-89597.jpg?w=2000'],
    cuisine: 'American',
    category:   'Main',
    type: 'Meat',
    price: 8,
    quantity: 12,
    ingredients: ['Meat', 'Bread', 'Cheese'],
    // comments: [
    //   {
    //     rating: 5,
    //     comment: 'The best burger I have ever eaten!',
    //     _id: '3',
    //   },
    //   {
    //     rating: 3,
    //     comment: 'Average burger',
    //     _id: '4',
    //   }]
  },
  {
    _id: '3',
    name: 'Pasta',
    description: 'Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily. It is also commonly used to refer to the variety of pasta dishes. Italian pasta is made from an unleavened dough of a durum wheat flour mixed with water or eggs, and formed into sheets or various shapes, then cooked by boiling or baking. Pasta is typically served with a sauce, such as tomato sauce, carbonara sauce, pesto sauce, Alfredo sauce, or may be served simply with butter.',

    images: [
      'https://thumbs.dreamstime.com/b/gourmet-tasty-italian-penne-pasta-plate-close-up-spicy-tomato-herbs-white-served-top-wooden-table-58667798.jpg',
      'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg',
      'https://previews.123rf.com/images/topntp/topntp2001/topntp200100458/136952150-penne-pasta-in-tomato-sauce-italian-food-style.jpg'],
    cuisine: 'Italian',
    category: 'Main',
    type:  'Main',
    price: 12,
    quantity: 5,
    ingredients: ['Pasta', 'Tomato'],
  },
  {
    _id: '4',
    name: 'Salad',
    description: 'A salad is a dish consisting of a mixture of small pieces of food, usually vegetables or fruit. They are typically served at room temperature or chilled, with notable exceptions such as south German potato salad or chicken salad. Salads may contain virtually any type of ready-to-eat food.',
    images: [
      'https://img.freepik.com/premium-photo/salad-tomatoes-cucumber-red-onions-lettuce-leaves_2829-1732.jpg?w=2000',
      'https://media.istockphoto.com/id/175197961/photo/salad-plate.jpg?s=612x612&w=0&k=20&c=9lxiIPsTBH7ytCXWuC__FvWyxkPxtkJ2evoNLrwhOVA=',
      'https://img.freepik.com/free-photo/salad-with-vegetables_2829-1731.jpg?w=2000'],
    cuisine: 'American',
    category: 'Salad',
    type: 'Vegetarian',
    price: 5,
    quantity: 2,
    ingredients: ['Tomato', 'Cucumber', 'Lettuce'],
  },
  {
    _id: '5',
    name: 'Soup',
    description: 'Soup is a primarily liquid food, generally served warm or hot (but may be cool or cold), that is made by combining ingredients of meat or vegetables with stock, or water. Hot soups are additionally characterized by boiling solid ingredients in liquids in a pot until the flavors are extracted, forming a broth. Some soups may include pieces of solid food, such as pasta or pieces of meat; others may be thickened with the use of flour, potatoes, rice, or other thickeners. Pureed soups may incorporate blended vegetables, pureed pulses, or pureed meat.',
    images: [
      'https://media.istockphoto.com/id/1092632852/photo/vegetable-soup.jpg?s=612x612&w=0&k=20&c=TLMWC8lshitbk8pONGpblEsmcsBy1wZVQ9jJC92Cvh4=',
      'https://t3.ftcdn.net/jpg/01/75/32/50/360_F_175325011_dkaIRMZzWBR25LFznEqkC7Z1fAmZfj59.jpg',
      'https://media.istockphoto.com/id/494154858/photo/hot-homemade-corn-chowder.jpg?s=612x612&w=0&k=20&c=NuwffkneEU9yGgu_SnSZd45wPB_MeJO5YBGfg70x-L0='],
    cuisine: 'American',
    category: 'Soup',
    type: 'Vegetarian',
    price: 5,
    quantity: 23,
    ingredients: ['Potato', 'Carrot']
  },
  {
    _id: '6',
    name: 'Sandwich',
    description: 'A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type. The sandwich began as a portable finger food in the Western world, though over time it has evolved into a dish that is eaten with a knife and fork.',
    images: [
      'https://media.istockphoto.com/id/1256670482/photo/turkey-sandwich-with-tomato-and-lettuce.jpg?s=612x612&w=0&k=20&c=CPwIFBHQqOob3SNZbegKKjUVL6xkUZgoQ2cxT0jcUrQ=',
      'https://media.istockphoto.com/id/510482834/photo/sandwich-bread-tomato-lettuce-and-yellow-cheese.jpg?s=612x612&w=0&k=20&c=Q69t_vK73KXddedlvN4RmFcPL34mCwEqprJvbDTyOWo=',
      'https://media.istockphoto.com/id/1154590261/photo/close-up-photo-of-a-club-sandwich-sandwich-with-meat-prosciutto-salami-salad-vegetables.jpg?s=612x612&w=0&k=20&c=oeXk_VtAvrIL1CUTKAfsGBBbGgUQ2c4DvAt-DNpsmpk='
    ],
    cuisine:'American',
    category: 'Sandwich',
    type: 'Meat',
    price: 3,
    quantity: 11,
    ingredients: ['Bread', 'Ham', 'Salad', 'Tomato'],
  },
  {
    _id: '7',
    name: 'Steak',
    description: 'A steak is a meat generally sliced across the muscle fibers, potentially including a bone. It is normally grilled, though can also be pan-fried. Steaks are usually grilled in an attempt to replicate the flavor of steak cooked over an open fire. Steak is also pan-fried or deep-fried. Steak is often grilled in an attempt to replicate the flavor of steak cooked over an open fire. Steak is also pan-fried or deep-fried.',
    images: [
      'https://media.istockphoto.com/id/541851706/photo/grilled-beef-steaks.jpg?s=612x612&w=0&k=20&c=QxxzTMq0CO7qCHRGFoWzn5s1V0kCAHFLRJqsN7ttnI4=',
      'https://media.istockphoto.com/id/1371751060/photo/grilled-medium-rare-top-sirloin-beef-steak-or-rump-steak-on-a-steel-tray-dark-background-top.jpg?b=1&s=170667a&w=0&k=20&c=-Vc6g0zdRZIx1w38gddVmd2t5TIZlpZo0XzxTW9tBoo=',
      'https://st.depositphotos.com/1020618/4579/i/600/depositphotos_45796083-stock-photo-tasty-beef-steak-on-wooden.jpg'
    ],
    cuisine: "American",
    category: "Main",
    type: "Meat",
    price: 50,
    quantity: 6,
    ingredients: ['Meat']
  },
  {
    _id: '8',
    name: 'Fries',
    description: 'French fries, or simply fries (North American English), chips (British and Commonwealth English), finger chips (Indian English), or French-fried potatoes are batonnet or allumette-cut deep-fried potatoes. The potatoes are first soaked in water for about half an hour to remove excess starch, then fried in oil until golden brown. They are usually served hot, though some fast food restaurants offer them at room temperature.',
    images: [
      'https://media.istockphoto.com/id/1280158821/photo/diverse-keto-dishes.jpg?b=1&s=170667a&w=0&k=20&c=IsvvmxUGvo1MOmW2hlzTQ9MiHtgk7jwggRrZOm6xAOs=',
      'https://media.istockphoto.com/id/618214356/photo/basket-of-famous-fast-food-french-fries.jpg?b=1&s=170667a&w=0&k=20&c=finbsOcp8eqwZ48XhvGCZwTBWyR6AUjvqJGLEahlZAo=',
      'https://images.themodernproper.com/billowy-turkey/production/posts/2022/Homemade-French-Fries_8.jpg?w=1200&h=630&q=82&fm=jpg&fit=crop&dm=1662474181&s=f68d27ba8188b4f245bb70b52764dbdd'
    ],
    cuisine: "American",
    category: "Side",
    type: "Vegetarian",
    price: 7,
    quantity: 32,
    ingredients: ['Potato']
  },
  {
    _id: '9',
    name: 'Sushi',
    description: 'Sushi is a Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanying a variety of ingredients, such as seafood, often raw, and vegetables. Styles of sushi and its presentation vary widely, but the one key ingredient is "sushi rice", also referred to as shari, or sumeshi, which is seasoned with rice vinegar.',
    images: [
      'https://media.istockphoto.com/id/1053854126/photo/all-you-can-eat-sushi.jpg?s=612x612&w=0&k=20&c=qqPJBYcxR0fgmzIFj_k2V6Mbo12hBBCucs1i5HcGYA0=',
      'https://img.freepik.com/free-photo/side-view-sushi-set-with-soy-sauce-chopsticks-wooden-serving-board_176474-3234.jpg?w=2000',
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3VzaGl8ZW58MHx8MHx8&w=1000&q=80'
    ],
    cuisine: "Japanese",
    category: "Main",
    type: "Fish",
    price: 20,
    quantity: 12,
    ingredients: ['Rice', 'Fish']
  },
  {
    _id: '10',
    name: 'Chicken Tikka Masala',
    description: 'Chicken tikka masala is a dish of roasted marinated chicken chunks in spiced curry sauce. It is a dish originating from the Indian subcontinent, and is popular in Great Britain, Canada, the United States, Australia, New Zealand, and parts of the Caribbean. It is also popular in the Middle East, where it is known as chicken tikka masala.',
    images: [
      'https://media.istockphoto.com/id/1227594550/photo/chicken-curry-creamy-chicken-butter.jpg?s=170667a&w=is&k=20&c=MoMiWks5C8OlaBlJiiiooWEhu4u-RgVPNPdihDrT04o=',
      'https://media.istockphoto.com/id/1093661590/photo/traditional-indian-dish-chicken-tikka-masala-with-spicy-curry-meat-in-bowl-basmati-rice-bread.jpg?s=612x612&w=0&k=20&c=DCwxqEciOTaN14A13ym6F4p2UnprhNarn7OwIaOLNNo=',
      'https://media.istockphoto.com/id/579767430/photo/chicken-tikka-masala.jpg?s=612x612&w=0&k=20&c=EjeRH4r3w9qQ2WELp5qkqkUh1HbJJwRcFNNv1suOtvM='
    ],
    cuisine: "Indian",
    category: "Main",
    type: "Meat",
    price: 16,
    quantity: 8,
    ingredients: ['Chicken', 'Curry']
  },
  {
    _id: '11',
    name: 'Biryani',
    description: 'Biryani is a mixed rice dish with its origins among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and meat, and sometimes, in addition, eggs and/or vegetables such as potatoes in certain regional varieties. Biryani is usually cooked in a pot by the dum method, in which the rice is layered with the other ingredients and then cooked over low heat.',
    images: [
      'https://media.istockphoto.com/id/488481490/photo/fish-biryani-with-basmati-rice-indian-food.jpg?s=612x612&w=0&k=20&c=9xEw3VOQSz9TP8yQr60L47uExyKF9kogRhQdlghlC00=',
      'https://t3.ftcdn.net/jpg/02/51/39/42/360_F_251394284_Tn8Z8opzrQylClF7Nu8cuA26lf398oCS.jpg',
      'https://media.istockphoto.com/id/1305452646/photo/biryani.jpg?b=1&s=170667a&w=0&k=20&c=X_pTmJ71KWqnUWqCAU15labShH3FxGjnHsnLRnXhJoo='
    ],
    cuisine: 'Indian',
    category: 'Main',
    type: 'Meat',
    price: 23,
    quantity: 5,
    ingredients: ['Rice', 'Chicken']
  },
  {
    _id: '12',
    name: 'Burrito',
    description: 'A burrito is a type of Mexican and Tex-Mex food, consisting of a wheat flour tortilla wrapped or folded into a cylindrical shape to completely enclose the filling. A traditional burrito is made with a tortilla, rice, beans, meat, and salsa. It can be served with guacamole, sour cream, and cheese. The tortilla is sometimes lightly grilled to add texture and flavor.',
    images: [
      'https://media.istockphoto.com/id/1313361282/photo/mexican-rice-and-chorizo-sausage-wrap.jpg?s=612x612&w=0&k=20&c=7BgOT-kuluQIlZ50l-p-DNvajA66EeB_HIUvW6O_GPM=',
      'https://media.istockphoto.com/id/1317280854/photo/mexican-rice-and-chicken-burrito.jpg?b=1&s=170667a&w=0&k=20&c=QmhqI6sR8HPFKbL2pyi4fHkyxCDMFtw99qrSu6CdgaI=',
      'https://cdn.pixabay.com/photo/2017/06/29/20/09/mexican-2456038__480.jpg'
    ],
    cuisine: 'Mexican',
    category: 'Main',
    type: 'Meat',
    price: 15,
    quantity: 10,
    ingredients: ['Tortilla', 'Rice', 'Beans', 'Meat']
  },]
