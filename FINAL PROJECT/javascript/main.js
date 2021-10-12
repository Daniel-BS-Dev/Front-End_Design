// Declarando variaveis
var btnContact = document.querySelector('.jl-btn-contact');
var toggleModal = document.querySelectorAll('.jl-toggle-modal');

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

// Abrindo e Fechando o Modal de Orçamento
for(var i=0; i < toggleModal.length; i++){
    toggleModal[i].addEventListener('click', function(){
        var overlay = document.querySelector('.jl-overlay');
        var modalBudget = document.querySelector('#jl-budget');

       overlay.classList.toggle('jl-is-open');
       modalBudget.classList.toggle('jl-is-open');
       modalBudget.classList.toggle('jl-slide-top-in');
    });
}

// animando elementos on scroll com waypoints
var myscrollDown =  document.querySelector('.jl-scroll-down');
var waypoint = new Waypoint(
    {
    element:myscrollDown,
    handler: function() {
      myscrollDown.classList.toggle('jl-fade-out');
    },
    offset:'80%'
  })