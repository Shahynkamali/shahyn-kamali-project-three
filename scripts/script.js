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


const playAudio = () =>{
    const sound = document.getElementById("myAudio");
    sound.play();
}

const dropKetchup = () =>{
    $('.squirtEffect').on('click', function () {
        playAudio();
        $('.box').addClass('drop');
        setTimeout(function () {
            $('.box').removeClass('drop');
        }, 1000);
    });
}



let i = 0;
const time = 150;
const imageArray = [];
const num = Math.floor(Math.random() * 100 + 1);
foodArray.forEach(food => imageArray.push(food.img));

const changeImg = () =>{
    document.slide.src = imageArray[i];
    if(i < imageArray.length - 1 ){
        i++
    } else{
        i = 0
    }
    const interval = setTimeout('changeImg()', time);
    if (interval == num){
        clearInterval(interval);
        $('.slideshow').hide();
        $('.pickChoice').hide();
        $('.item').show();
    }
}


const angryGordy = (answerHTML) =>{
    $('.answer').removeClass('block').addClass('answerFlex').html(answerHTML);
    
    
}

const initGame = (randomItem) =>{
    $('svg').delay(4000).fadeOut();
    $(".pickChoice").click(function (e) {
        e.preventDefault();
        $('.ketchupBottle').hide();
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
    });
    
}

const displayOptions = () =>{
    $('.choose').hide(); 
    let delayTime = num * 150;
    $(".choose").delay(delayTime).fadeIn(1000);
    
}

const displayChoice = (randomItem, answerHTML) =>{
    $(".yes").click(function (e) {
        e.preventDefault();
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
        const answerHTML = `
        <div class="answerSection">
            <p>${randomItem.falseAnswer}</p>
        </div>
        <div class="image">
            <img src="./images/angel.png">
        </div>`
        restart();
        angryGordy(answerHTML);
    });
}

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