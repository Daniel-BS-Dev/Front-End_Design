 // PORTFOLIO SLIDER

 // Dclarando variaveis do slider
 var sliderContainer = document.querySelector('.jl-slider-container');
 var sliderList = document.querySelector('.jl-slider-list');
 var sliderItems = document.querySelectorAll('.jl-slider-item');
 var sliderListWidth = null;

 //capturando largura individuais
 var containerWidth = sliderContainer.parentElement.offsetWidth;
 

 // Passando largura dinâmicas
 sliderContainer.style.width= containerWidth+'px';

 for(var p=0; p<sliderItems.length; p++){
     sliderItems[p].style.width = containerWidth+'px';
     var sliderItemWidth = sliderItems[p].offsetWidth;

     sliderListWidth += sliderItemWidth;
 }

 sliderList.style.width = sliderListWidth +'px';


 // Fazendo animação do slider onClick

 var prevItem = document.querySelector('.jl-item-prev');
 var nextItem = document.querySelector('.jl-item-next');
 var sliderPos = 0;

 //HANDLERS
 var nextSliderAnime = function(){
    var lastItem = sliderListWidth - containerWidth;
    if(-sliderPos === lastItem){
       return;
    }
    sliderPos -= containerWidth;
     anime({
         targets: sliderList,
         translateX: sliderPos
     });
     console.log(sliderPos)
 }

 var prevSliderAnime = function(){
    if(sliderPos === 0){
        return;
     }
     sliderPos += containerWidth;
      anime({
          targets: sliderList,
          translateX: sliderPos
      });
      console.log(sliderPos)

 }
 nextItem.addEventListener('click', function(){
     nextSliderAnime();
 });

 prevItem.addEventListener('click', function(){
     prevSliderAnime();
   
});