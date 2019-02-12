class Food {
    constructor(name, img, needsKetchup, type, location ){
        this.name = name;
        this.img = img;
        this.needsKetchup = needsKetchup;
        this.type = type;
        this.location = location;
    }
    description(){
        return `A ${this.name} is a ${this.type} that typically is consumed in ${this.location}`
    }

}

const foodOne = new Food('hamburger', "./images/burger.png", true, "sandwich", "restaurants/snackbars");
const foodTwo = new Food('hotdog', "./images/hotdog.png", false, "sandwich", "outdoor venues");
const foodThree = new Food('spaghetti', './images/spaghetti.png', false, "entree", "restaurants" );
const foodFour = new Food('fries', './images/fries.png', true, "side dish","snackbars");
const foodFive = new Food('pizza', './images/pizza.png', false, "entree", "snackbars/restaurants");
foodArray = [];
foodArray.push(foodOne, foodTwo, foodThree, foodFour, foodFive);



