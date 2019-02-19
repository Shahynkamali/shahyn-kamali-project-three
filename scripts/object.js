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
        return `${this.name} is a ${this.type} that typically is consumed in ${this.location}`
    }
    
}




const foodOne = new Food('hamburger', "./images/burger.png", true, "sandwich", 'restaurant/snackbar', "As long as you combine your ketchup with some mustard and pickles you are on the right track! These condiments balance eachother out and deliver an amazing burger experience!","So what do you put on your burger?! Please tell me you are not putting mayo on your burger?" );
const foodTwo = new Food('hotdog', "./images/hotdog.png", false, "sandwich", "outdoor venues", "Are you a six year old? Ketchup does not belong on a hotdog! The sweetness of the ketchup will take over and all you will taste is ketchup! You might as well just eat a bun with ketchup!" ,"The National Hot Dog and Sausage Council recently came out in disapproval of adults using ketchup on hot dogs. In a guide to hot dog etiquette, the organization decreed that for those 18 years of age and older, acceptable wiener toppings include mustard, relish, onions, cheese and chili");
const foodThree = new Food('spaghetti', './images/spaghetti.png', false, "entree", "restaurants", "Ketchup on pasta? Do you not have any taste buds? I mean i do not understand why you would but ketchup on your Pasta! All Italian grandmothers are embarrassed! ", "Congrats! Ketchup does not or ever belong on a Pasta!");
const foodFour = new Food('fries', './images/fries.png', true, "side dish","snackbars","Fries and ketchup are a match made in heaven. The sweetness of the ketchup balances out the saltiness and the savoury of fries so your mouth is like: This is nice, please give me more!", "You don't like ketchup on your fries? You must be salty! ");
const foodFive = new Food('pizza', './images/pizza.png', false, "entree", "snackbars/restaurants","Ketchup on pizza?.. really?? WHY? Do you even have taste buds? Do you order chicken fingers in a grown up restaurant? are you lonely? its because you ketchup on your pizza!", "Congratz! you are a normal human being!");
const foodSix = new Food('grilled cheese', './images/sandwich.png', true, "sandwich","at home", "This is actually an European delicassy! Ketchup on a grilled cheese is great because the richness of the cheese and bread will balance out the sweetness of the ketchup", "There is no shame in being uncultured!" )
const foodSeven = new Food('fried chicken', './images/fried-chicken.png', true, "entree", "snackbar/restaurant", "Ketchup goes well with fried chicken because of the richness of the crust and texture of the chicken. Maybe add some spice to it and you might be on to something!", "Chillout! its oke to put ketchup on your fried chicken! You probably do not like ketchup or having fun!" );
const foodEight = new Food('turkey', "./images/turkey.png", false, "entree", "at home during thanksgiving","I do not understand why you find it neceserry to make everybody uncomfortable with your ketchup obsession? Like there are so many other things you can put on your meat?", "Congrats! we are all very happy that you do not put ketchup on turkey! Gravy is such a better alternative!", "Good choice! sushi is a texteral dish and putting ketchup on sushi would ruin allt the beautifull mouth sensations that sushi gives us!"  );
const foodNine = new Food('sushi', './images/sushi.png', false,"entree", "restaurants","You uncultered %#$%^$ piece of ^&%&%^, why would you ruin a beautiful piece of sashimi with ketchup? If you continue this behavior you will die all alone!", "Sushi is very textural and putting ketchup on your sushi would ruin the experience!"  );
const foodTen = new Food('onion rings', "./images/onion-rings.png", true,"side dish", "snackbar","Cool! good choice! Onion rings are fatty and could benefit from some sweet flavours that come with ketchup!", "What else do you put on your onion rings??? Mayo?! You are better than this!");
const foodEleven = new Food('steak', './images/steak.png', false, 'entree', 'restaurants',"Go ^&%%% Yourself!, Why would you ruin a beautful piece of steak and drench it in ketchup! Its really not cool!", "Not putting ketchup on your steak is probably the best decision you have ever made! Plus you do not have to feel the judgement from everybody in the restaurant!");
const foodTwelve = new Food('picles', './images/pickles.png', true, 'side-dish', 'at home/restaurants', "you might be shocked but the acidity and sourness of the pickles go really well with ketchup! Make sure you put it on a sandwich with some protein otherwise you look like the psychopath!","I mean, there is nothing wrong with playing it save! You enjoy that vanilla icecream!"  );
const foodThirteen  = new Food('shrimp', "./images/shrimp.png", true, "entree", 'restaurants', 'Hell Yeah! Ketchup and Shrimps are great together because the sweetness of the ketchup extends the flavour of the shrimp! It is a southern treat!', "Thats cool! you can only handle so much sweetness in life! There are other great sauces that go well with shrimps so you are covered!" );
const foodArray = [];
foodArray.push(foodOne, foodTwo, foodThree, foodFour, foodFive, foodSix, foodSeven, foodEight, foodNine, foodTen, foodEleven, foodTwelve, foodThirteen);

