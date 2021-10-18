var overlay = document.querySelector('.jl-overlay');
var frameContainer = document.querySelector('.jl-gallery-frame-container');
var frameImage = document.querySelector('.jl-gallery-frame-image');
var galleryImages = document.querySelectorAll('.jl-thumb-img');
var closeGallery = document.querySelectorAll('.jl-toggle-gallery');
var btnNext = document.querySelector('.jl-item-next');
var btnPrev = document.querySelector('.jl-item-prev');

const getImageSrc = function(){
    for(var i=0; i<galleryImages.length; i++){
      galleryImages[i].addEventListener('click', function(){
        var imageSrc = this.getAttribute('data-src');
        var itemNum = this.getAttribute('data-item');
        frameImage.setAttribute('src',imageSrc);
        frameImage.setAttribute('data-index',itemNum);
        frameImage.style.height=527+'px';

        overlay.classList.add('jl-is-open');
        frameContainer.classList.add('jl-is-open');
      });
    }
}

getImageSrc();

for(var c=0; c < closeGallery.length; c++){
    closeGallery[c].addEventListener('click', function(){
        overlay.classList.remove('jl-is-open');
        frameContainer.classList.remove('jl-is-open');
    });
}

const nextItem = function(){


//Identificar o item atual no frame = 3
var currentItemNum = parseInt(frameImage.getAttribute('data-index'));

//Definimos o numero do proximo item = atual + 1
var nextItemNum = parseInt(currentItemNum) + 1;

//Fazemos o loop e identificamos qual faz match com o numero proximo item
for(var n=0; n<galleryImages.length;n++){
  var item = galleryImages[n];
  var itemNumber = parseInt(item.getAttribute('data-item'));

  if(itemNumber === nextItemNum){
   var nextSrc = item.getAttribute('data-src');
   var nextIndex = item.getAttribute('data-item');

   frameImage.setAttribute('src',nextSrc);
   frameImage.setAttribute('data-index',nextIndex);
  }
}

//Captura o data-src


//Passamos o data-src para a tag de img no frame
}

btnNext.addEventListener('click',function(){
  nextItem();
});

const prevItem = function(){


  //Identificar o item atual no frame = 3
  var currentItemNum = parseInt(frameImage.getAttribute('data-index'));
  
  //Definimos o numero do proximo item = atual + 1
  var preItemNum = parseInt(currentItemNum) - 1;
  
  //Fazemos o loop e identificamos qual faz match com o numero proximo item
  for(var p=0; p<galleryImages.length;p++){
    var item = galleryImages[p];
    var itemNumber = parseInt(item.getAttribute('data-item'));
  
    if(itemNumber === preItemNum){
     var prevSrc = item.getAttribute('data-src');
     var prevIndex = item.getAttribute('data-item');
  
     frameImage.setAttribute('src',prevSrc);
     frameImage.setAttribute('data-index',prevIndex);
    }
  }
  
  //Captura o data-src
  
  
  //Passamos o data-src para a tag de img no frame
  }
  
  btnPrev.addEventListener('click',function(){
    prevItem();
  })