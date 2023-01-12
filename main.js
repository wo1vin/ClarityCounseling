const boxHover = document.querySelector(".boxHover");
const primaryContent = document.querySelector(".primaryContent");
const secondaryContent = document.querySelector(".secondaryContent");

const methods = boxHover.forEach(e => {boxHover.addEventListener("mouseover", swapContent())})

const swapContent = () => {
    primaryContent.style.display="none";
    secondaryContent.style.display="flex";
}