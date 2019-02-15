foodArray.forEach(item => {
  const itemChoices =`
  <div class="addItem">
    <div class="image">
        <img src="${item.img}">
    </div>
    <p>${item.name}</p>
  </div>
  
  `;
  $('.item').append(itemChoices);
  // init
  // function highlight items
  // 

});




$(document).ready(function () {
    $(".yes").hide();
    $(".no").hide();
    $(".pickChoice").click(function (e) {
        e.preventDefault();
        const randomItem = foodArray[Math.floor(Math.random() * foodArray.length)];
        const itemHTML = `
        <div class="randomItem">
            <h2>You Choose ${randomItem.name}</h2>
            <img src="${randomItem.img}"
            </div>`
            $('.item').html(itemHTML);
        });
        $(".yes").show();
        $(".no").show();
        $(".yes").click(function (e) { 
            e.preventDefault();
            const answerHTML = `
            <div class="answerSection">
                <p>${randomItem.answer}</p>
            </div>
            <div class="image">
                <img src="./images/gordy.jpeg">
            </div>
            `
            $('.answer').html(answerHTML);
        });
        $(".no").click(function (e) { 
            e.preventDefault();
            const answerHTML = `
            <div class="answerSection">
                <p>${randomItem.falseAnswer}</p>
            </div>`
            $('.answer').html(answerHTML);
            
        });
});


