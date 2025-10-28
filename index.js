let youtube = undefined
function onYouTubeIframeAPIReady() {
    youtube = new YT.Player("yt", {
        "events": {
            // 'onReady': onPlayerReady,
            // 'onStateChange': onPlayerStateChange
        }
     })
 }

document.querySelectorAll(".CarouselItem").forEach((carouselItem) => {
    carouselItem.addEventListener("click", function() {
        const id = carouselItem.getAttribute("data")
        // const src = carouselItem.src.replace("116x65", "1920x1080")
        document.querySelectorAll(".FocusItem").forEach((focusItem) => {
            if(focusItem.id == id) {
                focusItem.style.opacity = 1
                focusItem.style.pointerEvents = "auto"
            } else {
                focusItem.style.opacity = 0
                focusItem.style.pointerEvents = "none"
            }
        })
        document.querySelectorAll(".CarouselItem").forEach((carouselItem) => {
            if(carouselItem.getAttribute("data") == id) {
                carouselItem.style.borderColor = "white"
            } else {
                carouselItem.style.borderColor = "transparent"
            }
        })
        if(youtube != undefined) {
            if(id == "yt") {
                youtube.playVideo()
            } else {
                youtube.pauseVideo()
            }
        }
    })
})
