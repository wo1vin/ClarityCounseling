const cards = document.querySelectorAll(".card");
const cardBack = document.querySelector(".card-back");

cards.forEach( card => {
    const cardFront = card.children[0];
    const cardBack = card.children[1];

    card.addEventListener("mouseover", (event) => {
        event.preventDefault();

        cardFront.classList.remove("card-front-slide-in");
        cardBack.classList.remove("card-back-slide-out");
        cardFront.classList.add("card-front-slide-out");
        cardBack.classList.add("card-back-slide-in");

        console.log(`mouseover detected\ncard-front class list: ${cardFront.classList}\ncard-back class list: ${cardBack.classList}`);
    });

    card.addEventListener("mouseout", (event) => {
        event.preventDefault();
        
        cardFront.classList.remove("card-front-slide-out");
        cardBack.classList.remove("card-back-slide-in");
        cardFront.classList.add("card-front-slide-in");
        cardBack.classList.add("card-back-slide-out");

        console.log(`mouseout detected\ncard-front class list: ${cardFront.classList}\ncard-back class list: ${cardBack.classList}`);
    });

    card.addEventListener("touch", (event) => {
        event.preventDefault();

        cardFront.classList.remove("card-front-slide-in");
        cardBack.classList.remove("card-back-slide-out");
        cardFront.classList.add("card-front-slide-out");
        cardBack.classList.add("card-back-slide-in");

        console.log(`mouseover detected\ncard-front class list: ${cardFront.classList}\ncard-back class list: ${cardBack.classList}`);
    });

    card.addEventListener("mouseout", (event) => {
        event.preventDefault();
        
        cardFront.classList.remove("card-front-slide-out");
        cardBack.classList.remove("card-back-slide-in");
        cardFront.classList.add("card-front-slide-in");
        cardBack.classList.add("card-back-slide-out");

        console.log(`mouseout detected\ncard-front class list: ${cardFront.classList}\ncard-back class list: ${cardBack.classList}`);
    });

});

let position = document.body.scrollTop
console.log(position)