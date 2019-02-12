class Food {
    constructor(name, img, needsKetchup, type, location, answer, falseAnswer ){
        this.name = name;
        this.img = img;
        this.needsKetchup = needsKetchup;
        this.type = type;
        this.location = location;
        this.answer = answer;
        this.falseAnswer = falseAnswer;
    }
    description(){
        return `A ${this.name} is a ${this.type} that typically is consumed in ${this.location}`
    }
    

}

const foodOne = new Food('hamburger', "./images/burger.png", true, "sandwich", 'restaurant/snackbar', "i couldnt care less what you put on your burger.. i mean its a burger! You go live that vanilla life!" );
const foodTwo = new Food('hotdog', "./images/hotdog.png", false, "sandwich", "outdoor venues", "HELL TO THE NO!, What are you a six year old? It is unacceptable to put ketchup on a hotdog." ,"The National Hot Dog and Sausage Council recently came out in disapproval of adults using ketchup on hot dogs. In a guide to hot dog etiquette, the organization decreed that for those 18 years of age and older, acceptable wiener toppings include mustard, relish, onions, cheese and chili");
const foodThree = new Food('spaghetti', './images/spaghetti.png', false, "entree", "restaurants", "Are you kidding me?! Did your parents drop you when you were a kid?? I can hear Nonna crying already, calling you a digrease!, I am not even going to explain to you why you shouldnt put ketchup on pasta, there is no hope for you!","Thank god! Ketchup does not belong on a hot dog! iTs gross!");
const foodFour = new Food('fries', './images/fries.png', true, "side dish","snackbars","fries and ketchup are a match made in heaven. The sweetness of the ketchup balances out the saltiness and the savoury of fries so your mouth is like: this is nice, please give me more!", "whats wrong you with you psychopath! what do you use as a condiment on your fries? Mayo? Aioli? ");
const foodFive = new Food('pizza', './images/pizza.png', false, "entree", "snackbars/restaurants","Ketchup on pizza?.. really? I am like shocked.. Do you even have taste buds? Do you order chicken fingers in a grown up restaurant? are you lonely? its because you ketchup on your pizza!", "Congratz! you are a normal human being!");
const foodArray = [];
foodArray.push(foodOne, foodTwo, foodThree, foodFour, foodFive);




