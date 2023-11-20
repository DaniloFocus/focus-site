const player = document.querySelector(".player-icon")
const closeVideo = document.querySelector("#close-video")
const playerVideoModal = document.querySelector("#player-video-modal")

const createIframe = (data) => {
    const iframe = `<iframe width="560" height="315" src="https://www.youtube.com/embed/7j3I1H65Dtg?si=-75GNLS4oHCkArwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    playerVideoModal.innerHTML += iframe
}

const modalOpenClose = (elementClick, el, value) => {
    if(value === "flex"){ // Open 
        createIframe()
    }
    elementClick.addEventListener("click", () => el.style.display = value)
}

modalOpenClose(player,playerVideoModal,"flex")
modalOpenClose(playerVideoModal,playerVideoModal,"none")
modalOpenClose(closeVideo,playerVideoModal,"none")