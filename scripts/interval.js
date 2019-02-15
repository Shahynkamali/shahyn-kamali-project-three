const random = Math.floor(Math.random()) * foodArray.length * 2
let animationNumber = 0;
let foodArrayIndex = 0;

const interval = setInterval(() => {
    if (animationNumber > random) {
        clearInterval(interval);
        return;
    }
    if (animationNumber === random) {
        // animate the last one
        return console.log(this)
    }
    // add a class to foodArray[foodArrayIndex]

    if (foodArrayIndex > foodArrayIndex.length) {
        foodArrayIndex = 0
    } else {
        foodArrayIndex = foodArrayIndex + 1
    }

    animationNumber = animationNumber + 1;
}, 1000);
