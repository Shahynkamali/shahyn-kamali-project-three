
/* JS LIBRARY CREATES THE SVG ANIMATION */
anime({
    targets: '#Capa_1 .path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 10000,
    delay: function (el, i) {
        return i * 2000
    },
    direction: 'alternate',
    loop: false
});


/* FUNCTION THAT PULLS THE IMAGES FROM THE OBJECT AND PUSHES THEM IN AN OBJECT AND CREATES A SLIDESHOW */
let i = 0;
const time = 150;
const imageArray = [];
const num = Math.floor(Math.random() * 90 +1);
foodArray.forEach(food => imageArray.push(food.img));

const changeImg = () =>{
    document.slide.src = imageArray[i];
    if(i < imageArray.length - 1 ){
        i++
    } else{
        i = 0
    }
    const interval = setTimeout('changeImg()', time);
    if (interval === num){
        clearInterval(interval);
        $('.slideshow').hide();
        $('.pickChoice').hide();
        $('.item').show();
    }

}


/* DISPLAYS THE ANSWER IN THE HTML */

const angryGordy = (answerHTML) =>{
    $('.answer').html(answerHTML) 
}
/* INITS THE GAME AND DISPLAYS AN ITEM RANDOMLY CHOSEN */
const initGame = (randomItem) =>{
    $('svg').delay(4000).fadeOut()
    $(".pickChoice").click(function (e) {
        e.preventDefault();
        $('.bottle').hide();
        $('.item').hide();
        $('.choose').hide();
        changeImg()
         randomItem = foodArray[Math.floor(Math.random() * foodArray.length)];
        const itemHTML = `
        <div class="randomItem">
            <h2>${randomItem.name}</h2>
            <img src = "${randomItem.img}"
            </div>`
        $('.item').html(itemHTML);
        $('.choose').addClass('flex');
        displayChoice(randomItem);
        displayOptions();
        getDescription(randomItem);
    });
    
}

/* FUNCTION THAT DISPLAYS THE YES OR NO AND THE QUESTIONMARK */
const displayOptions = () =>{
    $('.choose').hide(); 
    let delayTime = num * 160;
    $(".choose").delay(delayTime).fadeIn(1000);
    $('.question').delay(delayTime).fadeIn();
    
}

/* FUNCTION THAT DISPLAYS THE INFORMATION ABOUT THE ITEM */
const getDescription = (randomItem) =>{
    $(".mark").click(function (e) { 
        e.preventDefault();
        const descHTML = `<p>${randomItem.description()}</p>`
        $(".question").html(descHTML);
    });
}


/* FUNCTION THAT DISPLAYS THE NEXT STATE AFTER THE USER CHOOSES YES OR NO */
const displayChoice = (randomItem, answerHTML) =>{
    $(".yes").click(function (e) {
        e.preventDefault();
        $('.question').hide()
        answerHTML = `
        <div class="answerSection">
            <p>${randomItem.answer}</p>
        </div>
        <div class="image">
            <img src="./images/gordy.jpeg">
        </div>
        `
        restart();
        angryGordy(answerHTML);
        
    });
    
    
    $(".no").click(function (e) {
        e.preventDefault();
        $('.question').hide()
        const answerHTML = `
        <div class="answerSection angel">
            <p>${randomItem.falseAnswer}</p>
        </div>
        <div class="image">
            <img src="./images/angel.png">
        </div>`
        restart();
        angryGordy(answerHTML);
    });
}

/* FUNCTION THAT RESTARTS THE GAME */

const restart = () =>{
    $('.choose').hide();
    $('.item').hide();
    $('.restart').show();
    $('.restart').click(function () {
    location.reload();
    });
        
}



$(function () {
    initGame();
});