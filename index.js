favFood = [
    "Venison",
    "cauliflower",
    "Lasagna",
    "Beef Pho",
    "Curry",
    "Pizza",
    "Veggie pizza",
    "pepperoni pizza",
    "Beef Burger",
]

let parent = document.querySelector("#foodList")

favFood.forEach((food) => {
    newFood = document.createElement("h2");
    newFood.innerText = food;
    parent.appendChild(newFood);
})

