// // `any` type
// let coupon;
// coupon = 25;
// coupon = 'pizza25';
// coupon = true;

// // Implicit vs Explicit types
// let implicitCoupon = 'pizza25';
// let explicitCoupon: string = 'pizza25';

// // `void` type
// // `void` type does not exist in JS, it is opposite to the `any` type
// let selectedTopping: string = 'pepperoni';

// function selectTopping(topping: string): void {
//   selectedTopping = topping;
// }

// console.log(`The selected topping is ${selectedTopping}`);

// // `never` type
// function orderError(error: string): never {
//   throw new Error(error);
//   console.log('This is never printed');
//   // never going to return a value
// }

// orderError('Something went wrong');

// // null, undefined, strict null checks
// let coupon: string | null = 'pizza25';

// function removeCoupon() {
//   coupon = null;
// }

// console.log(coupon);
// removeCoupon();
// console.log(coupon);

// //  union and literal types
// let pizzaSize: string = 'small';

// function selectPizzaSize(size: 'small' | 'medium' | 'large'): void {
//   pizzaSize = size;
// }

// selectPizzaSize('medium');
// console.log(`Pizza size is ${pizzaSize}`);

// // `function` types
// function sumOrder(price: number, quantity: number): number {
//   return price * quantity;
// }

// const total = sumOrder(25, 4);
// console.log(`total: ${total}`);

// const sumOrder1 = (price: number, quantity: number) => price * quantity;
// const total1 = sumOrder1(25, 1);
// console.log(`total1: ${total1}`);

// // let sumOrder2: Function;
// let sumOrder2: (price: number, quantity: number) => number;
// sumOrder2 = (x, y) => x * y;
// const total2 = sumOrder2(25, 2);
// console.log(`total2: ${total2}`);

// // functions and optional arguments
// let sumOrder: (price: number, quantity?: number) => number;
// sumOrder = (x, y) => {
//   if (y) {
//     return x * y;
//   } else {
//     return x;
//   }
// };

// let total = sumOrder(25);
// console.log(`sumOrder(25) is ${total}`);
// total = sumOrder(25, 2);
// console.log(`sumOrder(25, 2) is ${total}`);

// sumOrder = (x, y) => (y ? x * y : x);

// total = sumOrder(25);
// console.log(`sumOrder(25) is ${total}`);
// total = sumOrder(25, 2);
// console.log(`sumOrder(25, 2) is ${total}`);

// // typed functions and default parameters
// let sumOrder: (price: number, quantity?: number) => number;
// sumOrder = (x, y = 1) => x * y;

// let total = sumOrder(25);
// console.log(`sumOrder(25) is ${total}`);
// total = sumOrder(25, 2);
// console.log(`sumOrder(25, 2) is ${total}`);

// // Object types
// let pizza: { name: string; price: number; getName(): string };
// pizza = {
//   name: 'Plain Old Pepperoni',
//   price: 25,
//   getName() {
//     return pizza.name;
//   },
// };

// console.log(pizza.getName());
