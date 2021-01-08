$(document).ready(function () {


    $.each(window.iceCreamFlavors, (index,value) =>  { 
         $('.ice-cream-list').append(`<li>${value}</li>`)
    });    






});