// Declarando variaveis
var btnContact = document.querySelector('.jl-btn-contact');

//page Preloader
window.addEventListener('load',function(){
   var pagePreloader = document.querySelector('.jl-preloader');
    pagePreloader.classList.add('jl-fade-out');

});

//Abrindo e Fechando Informações de Contato
btnContact.addEventListener('click', function(){
   var boxContact = document.querySelector('.jl-contact-info');
   // classlist -> adiciona meu elemento 
   // toggle    -> quando eu click adicione quando eu click novamente remova
   boxContact.classList.toggle('jl-is-open');
   this.classList.toggle('jl-change-icon');

});