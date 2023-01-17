const cards = document.querySelectorAll(".card");
let position;

window.addEventListener("scroll", () => {
    position = window.pageYOffset;
    console.log("scroll position: " + position + "\n")
});

const isMobileDevice = () => {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) ? true : false;
};

console.log(isMobileDevice());

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