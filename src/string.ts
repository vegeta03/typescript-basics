let coupon: string;
coupon = 'pizza25';

function normalizeCoupon(code: string): string {
  return code.toUpperCase();
}

const code = normalizeCoupon(coupon);
console.log(code);

const multiLineString = `
This is a 
multi-line string.
`;
console.log(multiLineString);

const couponMesage = `The Final coupon code is ${normalizeCoupon(coupon)}`;
console.log(couponMesage);
