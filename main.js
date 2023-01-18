const cards = document.querySelectorAll(".card");

cards.forEach( card => {
    const cardFront = card.children[0];
    const cardBack = card.children[1];

    card.addEventListener("mouseover", (event) => {
        event.preventDefault();

        cardFront.classList.remove("card-front-slide-in");
        cardBack.classList.remove("card-back-slide-out");

        cardFront.classList.add("card-front-slide-out");
        cardBack.classList.add("card-back-slide-in");
    });

    card.addEventListener("mouseout", (event) => {
        event.preventDefault();
        
        cardFront.classList.remove("card-front-slide-out");
        cardBack.classList.remove("card-back-slide-in");

        cardFront.classList.add("card-front-slide-in");
        cardBack.classList.add("card-back-slide-out");
    });
});