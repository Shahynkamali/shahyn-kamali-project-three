

const angryGordy = (answerHTML) =>{
    $('.answer').html(answerHTML);
    
}

const initGame = (randomItem) =>{
    $(".pickChoice").click(function (e) {
        e.preventDefault();
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
    $('.pickChoice').hide();
    $('.restart').show();
    $('.restart').click(function () {
    location.reload();
    });
        
}


        $(function () {
            initGame();
        });