// var button = document.querySelector(".key-show");
// const pianoKey = document.querySelectorAll(".piano-btn .key")

// button.onclick = function () {
//     button.classList.toggle("text")
//     button.classList.toggle("text-span")
//     console.log("click hua")
// }
// // let audio = new Audio("tunes/a.wav");

// const playTune = (key) => {
//     audio.src = `tunes/${key}.wav`;
//     audio.play();
//     console.log(audio.play())
// }
// pianoKey.forEach(key => {
//     key.addEventListener("click", () => playTune(key.dataset.key))
// })


// document.addEventListener("keydown", (event) => {
//     const key = event.key.toLowerCase();
//     const audioElement = document.getElementById(`sound-${key}`);
//     // audioElement.currentTime = 0;
//     audioElement.play();
// })
function play(event){
   
    const key = event.key.toLowerCase();
    console.log(key)
    const audioElement = document.getElementById(`sound-${key}`);
    audioElement.play();
    console.log("click")
}