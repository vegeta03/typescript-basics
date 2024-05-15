// // creating interfaces
// interface Pizza {
//   name: string;
//   sizes: string[];
// }

// let pizza: Pizza;

// function createPizza(name: string, sizes: string[]): Pizza {
//   return {
//     name,
//     sizes,
//   };
// }

// pizza = createPizza('Pepperoni', ['small', 'medium']);

// // interfaces with function types
// interface Pizza {
//   name: string;
//   sizes: string[];
//   getAvailableSizes(): string[];
// }

// let pizza: Pizza;

// function createPizza(name: string, sizes: string[]): Pizza {
//   return {
//     name,
//     sizes,
//     getAvailableSizes() {
//       return this.sizes;
//     },
//   };
// }

// pizza = createPizza('Pepperoni', ['small', 'medium']);
// pizza.getAvailableSizes();

// // extending interfaces
// interface Sizes {
//   sizes: string[];
// }

// interface Pizza extends Sizes {
//   name: string;
//   getAvailableSizes(): string[];
// }

// let pizza: Pizza;

// function createPizza(name: string, sizes: string[]): Pizza {
//   return {
//     name,
//     sizes,
//     getAvailableSizes() {
//       return this.sizes;
//     },
//   };
// }

// pizza = createPizza('Pepperoni', ['small', 'medium']);
// pizza.getAvailableSizes();

// // interfaces with optional properties
// interface Sizes {
//   sizes: string[];
// }

// interface Pizza extends Sizes {
//   name: string;
//   toppings?: number;
//   getAvailableSizes(): string[];
// }

// let pizza: Pizza;

// function createPizza(name: string, sizes: string[]): Pizza {
//   return {
//     name,
//     sizes,
//     getAvailableSizes() {
//       return this.sizes;
//     },
//   };
// }

// pizza = createPizza('Pepperoni', ['small', 'medium']);
// pizza.toppings = 1;
