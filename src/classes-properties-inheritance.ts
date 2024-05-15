// // understanding classes and constructors
// class Pizza {
//   name: string;
//   toppings: string[] = [];

//   constructor(name: string) {
//     this.name = name;
//   }

//   addToppings(topping: string): void {
//     this.toppings.push(topping);
//   }
// }

// const pizza = new Pizza('Pepperoni');
// pizza.addToppings('pepperoni');

// console.log(pizza);

// // public and private members
// class Pizza {
//   toppings: string[] = [];

//   constructor(private name: string) {}

//   addToppings(topping: string): void {
//     this.toppings.push(topping);
//   }

//   getName() {
//     return this.name;
//   }
// }

// const pizza = new Pizza('Pepperoni');
// pizza.addToppings('pepperoni');

// console.log(pizza);

// // readonly members
// class Pizza {
//     toppings: string[] = [];

//     constructor(readonly name: string) {}

//     addToppings(topping: string): void {
//       this.toppings.push(topping);
//     }

//     getName() {
//       return this.name;
//     }
//   }

//   const pizza = new Pizza('Pepperoni');
//   pizza.addToppings('pepperoni');

//   console.log(pizza);

// setters and getters
class Sizes {
  constructor(private sizes: Array<string>) {}

  get availableSizes() {
    return this.sizes;
  }

  set availableSizes(sizes: Array<string>) {
    this.sizes = sizes;
  }
}

const sizes = new Sizes(['small', 'medium']);
console.log(sizes.availableSizes);
sizes.availableSizes = ['medium', 'large'];
console.log(sizes.availableSizes);
