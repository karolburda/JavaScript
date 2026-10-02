// Twoje rozwiazanie
document.querySelector("#wyroznij").addEventListener("click", ()=>{
    document.querySelector("#karta").classList.add("featured")
})

document.querySelector("#ukryj").addEventListener("click", ()=>{
    document.querySelector("#karta").classList.toggle("hidden")
})

document.querySelector("#reset").addEventListener("click", ()=>{
    document.querySelector("#karta").classList.remove("hidden")
    document.querySelector("#karta").classList.remove("featured")
})