  function addListeners(){
        let cards = document.querySelectorAll('.project-card');
        cards.forEach( function(card){
            card.addEventListener( 'click', function(event){
                let currentCard = event.target.closest('.project-card');
                if(!currentCard.classList.contains('active-card')){
                    currentCard.classList.add('active-card');
                }else{
                    currentCard.classList.remove('active-card');
                }
            });
        });
    };
addListeners();
document.documentElement.setAttribute("data-browser", navigator.userAgent);
console.log(navigator.userAgent);