var btnContact = document.querySelector('.jl-btn-contact');

btnContact.addEventListener('click', function(){
   var boxContact = document.querySelector('.jl-contact-info');
   // classlist -> adiciona meu elemento 
   // toggle    -> quando eu click adicione quando eu click novamente remova
   boxContact.classList.toggle('jl-is-open');
   this.classList.toggle('jl-change-icon');

});