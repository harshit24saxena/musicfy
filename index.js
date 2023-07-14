console.log("connected")
let audioelement = new Audio("songs/9.mp3");
let Gif = document.getElementById("gif");
let playButton = document.getElementById("playButton");
let myProgressBar = document.getElementById("progressBar")

// pause/play button 
playButton.addEventListener("click", ()=>{
    if(audioelement.paused || audioelement.currentTime <= 0){
        audioelement.play()
        playButton.classList.remove('fa-play-circle');
        playButton.classList.add('fa-pause-circle');
        Gif.style.opacity = 1;
    }
    else{
        audioelement.pause();
        playButton.classList.remove('fa-pause-circle');
        playButton.classList.add('fa-play-circle');
        Gif.style.opacity = 0;
    }
})


audioelement.addEventListener("timeupdate",(e)=>{
    let progress =( (audioelement.currentTime/audioelement.duration)*100)
    console.log(progress);
    myProgressBar.value = progress ;
})

myProgressBar.addEventListener("change",()=>{
    let v = audioelement.currentTime = myProgressBar.value *
    audioelement.duration/100;
})

