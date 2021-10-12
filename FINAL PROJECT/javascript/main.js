// Declarando variaveis
var btnContact = document.querySelector('.jl-btn-contact');

//Page Preloader
window.addEventListener('load', function () {
    var pagePreloder = document.querySelector('.jl-preloader');
    pagePreloder.classList.add('jl-fade-out');

    setTimeout(function () {
        pagePreloder.style.display = 'none';
    }, 2000);
});


//Abrindo e Fechando Informações de Contato
btnContact.addEventListener('click', function(){
   var boxContact = document.querySelector('.jl-contact-info');
   // classlist -> adiciona meu elemento 
   // toggle    -> quando eu click adicione quando eu click novamente remova
   boxContact.classList.toggle('jl-is-open');
   this.classList.toggle('jl-change-icon');


});
