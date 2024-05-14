// 01. printing "Hello, World!!!"
// console.log("Hello, World!!!")

// Primitive Types

// number type

// let pizzaCost: number = 10;
const pizzaCost: number = 10;
const pizzaToppings: number = 2;

function calculatePrice(cost: number, toppings: number): number {
  return cost + 2 * toppings;
}

const cost: number = calculatePrice(pizzaCost, pizzaToppings);
