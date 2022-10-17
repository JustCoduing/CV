let downBtn = document.querySelector(".arrow")
let chevron = document.querySelector("#arrow-down")
let infoContainer = document.querySelector(".join")

downBtn.addEventListener("click",handleInfoContainer)

function handleInfoContainer()
{
    infoContainer.classList.toggle("active")
    chevron.classList.toggle("fa-xmark")
}