const SELECTORS = {
    cards: document.querySelectorAll(`.project-card`)
}

const MODIFIER = {

    addListeners(){
        SELECTORS.cards.forEach( function(card){
            card.addEventListener( `click`, function(event){
                let currentCard = event.target.closest(`.project-card`);
                if(!currentCard.classList.contains(`active-card`)){
                    currentCard.classList.add(`active-card`);
                }else{
                    currentCard.classList.remove(`active-card`);
                }
            });
        })
    },
}
MODIFIER.addListeners();