// Twoje rozwiazanie
document.querySelector("#btnLike").addEventListener("click", () => {
    if(document.querySelector("#btnLike").classList.contains("liked"))
    {
        document.querySelector("#btnLike").classList.remove("liked")
        document.querySelector("#btnLike").innerHTML= '<span id="icon">♡</span><span id="text">Polub to</span>'
    }else{
        document.querySelector("#btnLike").classList.add("liked")
        document.querySelector("#btnLike").innerHTML='<span id="text">Lubisz</span>'
    }
})