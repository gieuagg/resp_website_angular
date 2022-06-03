import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

foodDetails = [
  {
    id:1,
    foodName:"Four cheese garlic bread",
    foodDetails:"Toasted French bread topped with romano, cheddar,jack and parmesan, with a light layer of roasted butter.",
    foodPrice: 2.5,
    foodImg:"../assets/img/garlic-bread.jpeg"
  },
  {
    id:2,
    foodName:"French Fries",
    foodDetails:"Hand cut wedges of Yukon Gold potatoes fried in canola oil and tossed with truffle sea salt.",
    foodPrice: 4.20,
    foodImg:"../assets/img/french_fries.jpeg"
  },
  {
    id:3,
    foodName:"Stuffed Mushrooms",
    foodDetails:"Mushrooms caps baked with a filling of three choice cheeses, breadcrumbs and clams.",
    foodPrice:4.80,
    foodImg:"../assets/img/stuffed-mushrooms.webp"
  },
  {
    id:4,
    foodName:"Vegan Moussaka",
    foodDetails:"Eggplant with seet potato, pumpkin in soya with minced tomato sauce.",
    foodPrice:6.50,
    foodImg:"../assets/img/moussaka.jpeg"
  },
  {
    id:5,
    foodName:"Super Burger with Pita",
    foodDetails:"Veggie Burger with pita bread along with mustard, onion and hummus",
    foodPrice:5.60,
    foodImg:"../assets/img/burger.jpeg"
  },
  {
    id:6,
    foodName:"Super Grill",
    foodDetails:"Grilled Tomato, onion, seasoned mushroom, tofu served with rice with a side of tzatziki sauce.",
    foodPrice:3.40,
    foodImg:"../assets/img/grill.jpeg"
  },
  {
    id:7,
    foodName:"Aperol Spritz",
    foodDetails:"Sparkiling wine, aperol & a splash of soda tapped with a slice of orange.",
    foodPrice:5.60,
    foodImg:"../assets/img/aperol.webp"
  },
  {
    id:8,
    foodName:"Ginger Fizz",
    foodDetails:"Gin, fresh lime juice and ginger ale,  cinnamon and cloves.",
    foodPrice:5.60,
    foodImg:"../assets/img/ginger_fizz.webp"
  },
  {
    id:9,
    foodName:"Berry Punch",
    foodDetails:"Berry puree, sparkling wine & bitters topped with a mint foam.",
    foodPrice:5.60,
    foodImg:"../assets/img/berry_punch.jpeg"
  }
]

}
