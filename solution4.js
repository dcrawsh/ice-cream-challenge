$.each(window.iceCreamFlavors, (index,value) =>  { 
        let item = document.createElement('li');
        item.innerText = value;
        $('.ice-cream-list').prepend(item);
        $(item).addClass(`ice-cream-flavor ${index}`);
        $(item).hide()
   }); 
$('body').append("<button>SHOW ME THE ICE CREAM</button>")
$('button').css({"background-color":"white","border-radius":"25px","padding":"2rem","border":"2px solid #008CBA"})



$('button').click(function (e) { 
        $('li').show(1000);
        $('body').prepend('<h1>A little more jQuery fun</h1>');

});
$('button').hover(function (e) { 
        $(this).css({"background-color":"#008CBA","color":"white"});  
});

   
   
  


