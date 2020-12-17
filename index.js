const videoTag = document.querySelector("video")

document.addEventListener("keydown", e => {
    checkLetter(e.key);
})

function checkLetter(userKey){
    switch('userKey'){
        case "d":
            videoTag.play += 0.1;
            break;
        case "s":
            videoTag.play -= 0.1;
            break;
        case "r":
            videoTag.play = 1;
            break;
    }

    console.log(`Current Rate: ${videoTag.playbackRate.toFixed(2)}`);   
}