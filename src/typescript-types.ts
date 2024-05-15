// `any` type
let coupon;
coupon = 25;
coupon = 'pizza25';
coupon = true;

// Implicit vs Explicit types
let implicitCoupon = 'pizza25';
let explicitCoupon: string = 'pizza25';

// `void` type
// `void` type does not exist in JS, it is opposite to the `any` type
let selectedTopping: string = 'pepperoni';

function selectTopping(topping: string): void {
  selectedTopping = topping;
}

console.log(`The selected topping is ${selectedTopping}`);
