//Make sure all the pizzas end with "Pizza"
let pizzaMenu = {
  0: {
    name: "Cheesy Pizza",
    topping: ["extra-extra cheese", "pepporoni", "chicken", "pineapple"],
  },
  1: {
    name: "Magerita Pizza",
    topping: ["cheese", "pepporoni", "chicken", "pineapple", "gin"],
    desert: ["ice cream", "fruit juice", "free coke", "free fanta"],
  },
  2: {
    name: "Hawaiian Pizza",
    topping: ["cheese", "pepporoni", "chicken", "meat", "veggies", "gin"],
    desert: ["ice cream", "hawaiian wine", "freak-aly"],
  },

  3: {
    name: "Buffalo Pizza",
    topping: ["cheese", "pepporoni", "chicken", "beef", "gin"],
    desert: ["ice cream", "hawaiian wine", "freak-aly", "honey"],
  },
};

window.addEventListener("DOMContentLoaded", (event) => {
  const pizzaList = document.querySelector(".pizzaList");
  let pizzas = pizzaList.children;

  for (const pizza of pizzas) {
    pizza.addEventListener("click", function handleClick(event) {
      const index = Array.from(pizzaList.children).indexOf(event.target);
      console.log(pizzaMenu[index]);
    });
  }
});
