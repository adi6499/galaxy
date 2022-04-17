
let loading = document.querySelector(".loading")
window.addEventListener("load", () => {
   
    if (document.readyState == "interactive") {
        loading.style.display = "block"
    } else if (document.readyState == "complete") {
        loading.style.display = "none"
        
    }
})

let trees = document.querySelector(".trees")
for (let i = 0; i < 100; i++) {

    let randomDegree = Math.floor(Math.random() * 360) + "deg"
    let randomDegree1 = Math.floor(Math.random() * 360) + "deg"
    let randomSize = Math.floor(Math.random() * trees.clientHeight - 100) + "px"
    trees.innerHTML += `<div class="lines"></div>`
    let lines = document.querySelectorAll(".lines")
    lines[i].style.width = `0.1vmin`

    lines[i].style.height = `${randomSize}`
    lines[i].style.transform = `rotateZ(${randomDegree})rotateX(${randomDegree1})`
    let randomSeconds = Math.floor(Math.random() * 4) + "s"

    lines[i].style.animationDelay = `${randomSeconds}`


}

let sound = new Audio("Life-Blossom.mp3")
      
let play = document.getElementById("play")
play.addEventListener("click",(e)=>{
    if(e.target.textContent=="Play"){
        play.innerHTML="Pause"
        sound.play()
        sound.currentTime = 0
    }
    else if(e.target.textContent=="Pause"){
       play.innerHTML="Play"
       sound.pause()
       sound.currentTime = 0
    }
})


  



