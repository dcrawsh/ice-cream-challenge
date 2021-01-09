$.each(window.iceCreamFlavors, (index,value) =>  { 
        let item = document.createElement('li');
        item.innerText = value;
        $('.ice-cream-list').prepend(item);
        $(item).css("display","none");
        $(item).addClass("ice-cream-flavor");
   }); 
$('body').append("<button>SHOW ME THE ICE CREAM</button>")
$('button').css({"background-color":"white","border-radius":"25px","padding":"2rem","border":"2px solid #008CBA"})



$('button').click(function (e) { 
        
});
$('button').hover(function (e) { 
        $(this).css({"background-color":"#008CBA","color":"white"});  
});

   
   
  


