// Twoje rozwiazanie
document.querySelector("#btnEven").addEventListener("click", () => {
    for(let i=0; i<document.querySelectorAll("li:nth-child(2n)").length; i++)
        document.querySelectorAll("li:nth-child(2n)")[i].classList.add("highlight")
})