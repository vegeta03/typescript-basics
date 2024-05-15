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

// `function` types