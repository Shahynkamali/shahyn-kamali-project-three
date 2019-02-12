$(document).ready(function () {
    foodArray.forEach(fooditem => {
        $('.choices').append(`<h1><a href="#"class="title">${fooditem.name}</a></h1><br/>
        <div class="image">
        <img src="${fooditem.img}">
        </div>`);

    });

});
