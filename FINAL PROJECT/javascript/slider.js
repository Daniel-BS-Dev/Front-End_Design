 // PORTFOLIO SLIDER

 // Dclarando variaveis do slider
 var sliderContainer = document.querySelector('.jl-slider-container');
 var sliderList = document.querySelector('.jl-slider-list');
 var sliderItems = document.querySelectorAll('.jl-portfolio-item');
 const sliderTotalItems = sliderItems.length;
 var sliderListWidth = null;
 var prevItem = document.querySelector('.jl-item-prev');
 var nextItem = document.querySelector('.jl-item-next');
 var sliderPos = 0;
 var currentSlide = document.querySelector('.jl-current-slide');
 var totalSlide = document.querySelector('.jl-total-slide');
 var currentCounter = 1;
 var asideItems = document.querySelectorAll('.jl-item-navigator a');
 var navCounter = document.querySelector('.jl-navigator-counter span');

 
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


 //HANDLERS
 var nextSliderAnime = function(){
    var lastItem = sliderListWidth - containerWidth;
    if(-sliderPos === lastItem){
       return;
    }
    sliderPos -= containerWidth;
     anime({
         targets: sliderList,
         translateX: sliderPos,
         easing: 'cubicBezier(0,1.01,.32,1)'
     });
 }

 var prevSliderAnime = function(){
    if(sliderPos === 0){
        return;
     }
     sliderPos += containerWidth;
      anime({
          targets: sliderList,
          translateX: sliderPos,
          easing: 'cubicBezier(0,1.01,.32,1)'
      });

 }

 // Counter Formater

 var counterFormater = function(number){
   if(number < 10){
       return '0'+number;
   }else{
       return number;
   }
 }

 //Counter add
 var counterAdd = function(){
     if((currentCounter >= 0) && (currentCounter < sliderTotalItems)){ 
        currentCounter++;
        currentSlide.innerHTML= counterFormater(currentCounter);
        navCounter.innerHTML =counterFormater(currentCounter);
    
    }
  }

  //Counter remove
 var counterRemove = function(){
    if((currentCounter > 1) && (currentCounter <= sliderTotalItems)){ 
       currentCounter--;
       currentSlide.innerHTML= counterFormater(currentCounter);
       navCounter.innerHTML =counterFormater(currentCounter);
   }
 }

 //Set Active Nav
 var setActiveAside = function(){
     for(var a=0; a < asideItems.length; a++){
         let myAside = parseInt(asideItems[a].getAttribute('data-aside'));
         if(myAside === currentCounter){
             asideItems[a].classList.add('jl-item-active');

             anime({
                targets: '.jl-item-active',
                width:90
             });
         }
        
     }
 }

 //Set Active slider
 var setActiveSlide = function(){
    for(var sld=0; sld < sliderItems.length; sld++){
        let mySlideNum = parseInt(sliderItems[sld].getAttribute('data-slide'));
        if(mySlideNum === currentCounter){
            sliderItems[sld].classList.add('jl-slide-active');
            sliderItems[sld].querySelector('.jl-portfolio-item-box').classList.add('jl-scale-right');
            sliderItems[sld].querySelector('.jl-portfolio-item-thumb img').classList.add('jl-scale-up');
            sliderItems[sld].querySelector('.jl-portfolio-item-info').classList.add('jl-fade-from-left');
        }
        
    }
}

// Remove active slider
var RemoveActiveSlide = function(){
    for(var rms=0; rms < sliderItems.length; rms++){
        sliderItems[rms].classList.remove('jl-slide-active');
        sliderItems[rms].querySelector('.jl-portfolio-item-box').classList.remove('jl-scale-right');
        sliderItems[rms].querySelector('.jl-portfolio-item-thumb img').classList.remove('jl-scale-up');
        sliderItems[rms].querySelector('.jl-portfolio-item-info').classList.remove('jl-fade-from-left');

     }
}

 var changeActive = function(){
     for(var rm=0; rm < asideItems.length; rm++){
        asideItems[rm].classList.remove('jl-item-active');

        anime({
            targets: asideItems[rm],
            width:20
         });
     }

     RemoveActiveSlide();
     setActiveAside();
     setActiveSlide();
 }

 // ACTIONS
 anime({
    targets: '.jl-item-active',
    width:90
 });

 totalSlide.innerHTML=counterFormater(sliderTotalItems);


 nextItem.addEventListener('click', function(){
     nextSliderAnime();
     counterAdd();
     changeActive();
 });

 prevItem.addEventListener('click', function(){
     prevSliderAnime();
     counterRemove();
     changeActive();
});