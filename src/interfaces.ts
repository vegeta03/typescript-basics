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

// extending interfaces