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

// // setters and getters
// class Sizes {
//   constructor(private sizes: Array<string>) {}

//   get availableSizes() {
//     return this.sizes;
//   }

//   set availableSizes(sizes: Array<string>) {
//     this.sizes = sizes;
//   }
// }

// const sizes = new Sizes(['small', 'medium']);
// console.log(sizes.availableSizes);
// sizes.availableSizes = ['medium', 'large'];
// console.log(sizes.availableSizes);

// // classes and inheritance
// class Sizes {
//   constructor(private sizes: Array<string>) {}

//   get availableSizes() {
//     return this.sizes;
//   }

//   set availableSizes(sizes: Array<string>) {
//     this.sizes = sizes;
//   }
// }

// class Pizza extends Sizes {
//   toppings: string[] = [];

//   constructor(readonly name: string, sizes: Array<string>) {
//     super(sizes);
//   }

//   addToppings(topping: string): void {
//     this.toppings.push(topping);
//   }

//   getName() {
//     return this.name;
//   }
// }

// const pizza = new Pizza('Pepperoni', ['small', 'medium']);
// console.log(pizza.availableSizes);

// // abstract classes
// abstract class Sizes {
//   constructor(private sizes: Array<string>) {}

//   get availableSizes() {
//     return this.sizes;
//   }

//   set availableSizes(sizes: Array<string>) {
//     this.sizes = sizes;
//   }
// }

// class Pizza extends Sizes {
//   toppings: string[] = [];

//   constructor(readonly name: string, sizes: Array<string>) {
//     super(sizes);
//   }

//   addToppings(topping: string): void {
//     this.toppings.push(topping);
//   }

//   getName() {
//     return this.name;
//   }
// }

// const pizza = new Pizza('Pepperoni', ['small', 'medium']);
// console.log(pizza.availableSizes);

// // protected members and inheritance
// abstract class Sizes {
//   constructor(protected sizes: Array<string>) {}

//   get availableSizes() {
//     return this.sizes;
//   }

//   set availableSizes(sizes: Array<string>) {
//     this.sizes = sizes;
//   }
// }

// class Pizza extends Sizes {
//   toppings: string[] = [];

//   constructor(readonly name: string, sizes: Array<string>) {
//     super(sizes);
//   }

//   updateSizes(sizes: Array<string>) {
//     this.sizes = sizes;
//   }

//   addToppings(topping: string): void {
//     this.toppings.push(topping);
//   }

//   getName() {
//     return this.name;
//   }
// }

// const pizza = new Pizza('Pepperoni', ['small', 'medium']);
// console.log(pizza.availableSizes);
// pizza.updateSizes(['small']);
// console.log(pizza.availableSizes);

// // interface contracts with "implements"
// interface SizesInterface {
//   availableSizes: string[];
// }

// abstract class Sizes implements SizesInterface {
//   constructor(protected sizes: Array<string>) {}

//   get availableSizes() {
//     return this.sizes;
//   }

//   set availableSizes(sizes: Array<string>) {
//     this.sizes = sizes;
//   }
// }

// interface PizzaInterface {
//   readonly name: string;
//   updateSizes(sizes: Array<string>): void;
//   addToppings(topping: string): void;
// }

// class Pizza extends Sizes implements PizzaInterface {
//   toppings: string[] = [];

//   constructor(readonly name: string, sizes: Array<string>) {
//     super(sizes);
//   }

//   updateSizes(sizes: Array<string>): void {
//     this.sizes = sizes;
//   }

//   addToppings(topping: string): void {
//     this.toppings.push(topping);
//   }

//   getName() {
//     return this.name;
//   }
// }

// const pizza = new Pizza('Pepperoni', ['small', 'medium']);
// console.log(pizza.availableSizes);
// pizza.updateSizes(['small']);
// console.log(pizza.availableSizes);
