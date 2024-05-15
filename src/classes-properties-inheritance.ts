// classes, properties and inheritance
class Pizza {
  name: string;
  toppings: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addToppings(topping: string): void {
    this.toppings.push(topping);
  }
}

const pizza = new Pizza('Pepperoni');
pizza.addToppings('pepperoni');

console.log(pizza);
