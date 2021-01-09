$.each(window.iceCreamFlavors,  (index, value) => {
    $('.ice-cream-list').append(`<li class="ice-cream-flavor">${value}</li>`); 
})

$('body').prepend('<h1>Quick and Simple jQuery</h1>');


