$('body').prepend('<h1>Kinda Weird Using AJAX</h1>');
$.get('./index.html', (response) => {
    var array = $(response).find('script').prevObject[7].innerHTML.split("'");

    $.each(array.filter((item) =>  /^[A-Za-z]/.test(item)), (index,value) =>  { 
            $('.ice-cream-list').append(`<li class="ice-cream-flavor">${value}</li>`)
    });        
    
})