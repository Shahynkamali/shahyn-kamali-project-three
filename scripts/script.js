
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
console.log(`this is the interval${interval}`)
}
console.log(`this in the number:${num}`)


const angryGordy = (answerHTML) =>{
    $('.answer').html(answerHTML);
    
}

const initGame = (randomItem) =>{
    $(".pickChoice").click(function (e) {
        e.preventDefault();
        $('.item').hide();
        changeImg()
         randomItem = foodArray[Math.floor(Math.random() * foodArray.length)];
        const itemHTML = `
        <div class="randomItem">
            <h2>${randomItem.name}</h2>
            <img src="${randomItem.img}"
            </div>`
        $('.item').html(itemHTML);
        $('.choose').addClass('flex');
        $('.choose').show();
        displayChoice(randomItem);
    });
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