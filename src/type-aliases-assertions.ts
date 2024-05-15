// // type aliases
// let pizzaSize: 'small' | 'medium' | 'large';
// const selectSize = (size: 'small' | 'medium' | 'large') => (pizzaSize = size);
// selectSize('small');

// type Size = 'small' | 'medium' | 'large';
// type callback = (size: Size) => void;
// pizzaSize = 'small';
// const selectPizzaSize: callback = (x) => (pizzaSize = x);
// selectPizzaSize('medium');

// // type assertions
// type Pizza = { name: string; toppings: number };
// const pizza: Pizza = { name: 'Blazing Inferno', toppings: 5 };

// const serialized = JSON.stringify(pizza);

// function getNameFromJSON(obj: string) {
//   // return JSON.parse(obj);
//   // return (<Pizza>JSON.parse(obj)).name;
//   return (JSON.parse(obj) as Pizza).name;
// }

// const pizzaName = getNameFromJSON(serialized);
// console.log(pizzaName);
