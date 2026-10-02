// Twoje rozwiazanie
let kafelek=document.querySelectorAll(".plan")
for(let i=0; i<kafelek.length; i++){
    kafelek[i].addEventListener("click",()=>{
        for(let l=0; l<kafelek.length; l++){
            kafelek[l].classList.remove("active")
        }kafelek[i].classList.add("active")
    })
}