const img = document.querySelector("#img")
const body = document.querySelector("body")
const playPause = document.querySelector("#playpause")
const playPauseBtn = document.querySelector("#playpause-btn")
const audio = document.querySelector("#audio")
const title = document.querySelector("#title")
const prevBtn = document.querySelector("#prevbtn")
const nextBtn = document.querySelector("#nextbtn")
const progress = document.querySelector("#progress")
const progressBar = document.querySelector(".progress-bar")
const currTime = document.querySelector(".current-time")
const totalDuration = document.querySelector(".duration-time")
const volume = document.querySelector("#volume")
const layer = document.querySelector(".layer")
const volBar = document.querySelector(".bar")
const progressLine = document.querySelector(".progress-line")
const volumeRange = document.querySelector(".volumerange")
const repeatBtn = document.querySelector("#repeat")
const likeBtn = document.querySelector("#like")
const likeIcon = document.querySelector("#likeicon")
const songListBtn = document.querySelector("#list")
const songListBtnClose = document.querySelector("#closeList")
const songListIonIcon = document.querySelector("#list ion-icon")
const musicBodyWpr = document.querySelector(".music-body-wrapper")
const musicBody = document.querySelector(".music-body")
const songList = document.querySelector("#songs-list")

// start to app
async function start() {
  const response = await fetch("assets/json/songs.json")
  const data = await response.json()
  app(data)
}

// set display css
const displayCSS = (element, displayValue) => element.style.display = displayValue
// control class css
const classCSS = (action, element, classValue) => action === "add" ? element.classList.add(classValue) : element.classList.remove(classValue)

// deafult song index
let songIndex = 2

// song default state
let isPlaying = false

// song pause function
const playSong = () => {
  isPlaying = true
  playPauseBtn.name ="pause-sharp"
  audio.play()
}

// song play function
const pauseSong = () => {
  isPlaying = false
  playPauseBtn.name ="play-sharp"
  audio.pause()
}

// loading songs
const loadSong = (song) => {
    // img.src = song.cover
    title.textContent = song.displayName
    audio.src = song.path
}

// previous song 
const prevSong = (songs) => {
  songIndex--
  if(songIndex < 0){
    songIndex = songs.length - 1
  }
  loadSong(songs[songIndex])
  playSong()
}

// next song
const nextSong = (songs) => {
  songIndex++
  if(songIndex > songs.length-1){
    songIndex = 0
  }
  loadSong(songs[songIndex])
  playSong()
}

// update progress bar
const updateProgress = (e) => {
  if (isPlaying) {
    const { duration, currentTime } = e.target
    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100
    progress.value = progressPercent
    progressLine.style.width = `${progressPercent}%`
    if(progressPercent==100){
      return nextSong()
    }
    // Calculate display for duration
    const durationMinutes = Math.floor(duration / 60)
    let durationSeconds = Math.floor(duration % 60)
    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`
    }
    // Delay switching duration Element to avoid NaN
    if (durationSeconds) {
      totalDuration.textContent = `${durationMinutes}:${durationSeconds}`
    }
    // Calculate display for currentTime
    let currentMinutes = Math.floor(currentTime / 60)
    let currentSeconds = Math.floor(currentTime % 60)
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`
    }
    currTime.textContent = `${currentMinutes}:${currentSeconds}`
  }
}

// slide progress bar
const progressSlide = (e) => {
  const { value } = e.target
  const progressTime = Math.ceil((audio.duration / 100) * value)
  audio.currentTime = progressTime
    if(!isPlaying) {
      progressLine.style.width = `${value}%`
   }
}

// show volume bar
const volumeBar = () => {
  layer.classList.toggle('hide')
  setTimeout(()=>{
    if(layer.classList.contains("hide")){
      layer.classList.remove("hide")
    }
  }, 5000)
}

// set volume audio
const setVolume = () => {
  audio.volume = volumeRange.value
  const barWidth = (volumeRange.value/1)*100
  volBar.style.width = `${barWidth}%`
}

// repeat song
const repeat = () => {
  repeatBtn.classList.toggle('color')
  const repeatBtnState = repeatBtn.classList.contains("color")
  if(repeatBtnState){
    audio.loop = true
    loadSong()
  }else{
    audio.loop = false
    loadSong()
  }
}

// like song
const like = () => {
  if (likeBtn.classList.toggle("color")) {
    document.querySelector("#like ion-icon").name = "heart-sharp"
  } else {
    document.querySelector("#like ion-icon").name = "heart-outline"
  }
}

// create list songs
const createListSongs = (songs) => {
  const ul = document.createElement("ul")
  const figure = document.createElement("figure")
  const img = document.createElement("img")
  figure.appendChild(img)

  img.src="https://yandex-images.clstorage.net/pj53Hx139/62a749QGyj/r9y0AC8mOa_T4GLy43_8epzJ_cioArHeAzUEsAWn124C95DdKaE3V5wzAIpt-0HUQxfccC9hD8e03ItV715z87qOokxsZST2jqV1s6949X6DguCAqEWtjAgiH-dY4NU4XPKSsRPVFyHwSjb2HoU3nxcYjCEyelif6rHsQfYnKbKIz4QjLhpup8LrBdPFaO5GrYvy265uv6UjK1XwZuS-ITei9qg8_SIH6FA-8xqrP4gzG5sCDRdjpd-U1gXECAKzqt6qNyUtfqX1xxz_1mjMZZaAwsuSZ6iYMgZ7w3bKoSYvttutB94EDMFdMO0ohDyfMAKELQssa77hht0SyzYrjJ3NkgISGHm1w9U_4MNaykmUgODlkkO6kRgLWNZ-4aQsD5TkmzTxLgLNRCv1D44jpAYdmxMhLW2a_5TeN-0-MK6V1rQWKS14rdvGAfzjZchXpozZ551orYsLIHvMW_mMLwmO0osKwAcr5V8-2AmjLpQGGJgpEh12ivaE-yXZBjGDqf-aMTM_ULPN5gnK4ELPZquQ5NyLbrOrCzB6ynvFiDMkisysL-UmGv1XJfQtlA2JFzCZKykWUp7uiMQV3j4MlZD5mikOH06Tz9UmxfpI30ymnfnbpGmskwUcctRx4q8OJJbmmB_-GgjkTTDFDJ86gBE6ngksHXaHzJ_fDsgtIKuB-6MACC9mkP_4BcnEU9trvYDB_qhOnqIHMF3PV8iNAQOK67woxz0W5WsI_TKOH5ERMIQJPD1SnuukxCLgBiSygMSYICgBQbHf0hXO7nX1SJe96_WqTLGYOjp75W_KtDQKjOicJOAdFcxsJ-U4hzGlLz2fEis-SLLumuEEzBY3o5PRui0oI0CtwNQo5_V84GaegdHKt2uWkzkHcO9U16ccCLLOqDzmPxDoVRT1DqIpnw8DphIDH2uV7r3iLfs7BaCXxbALOTxlts_iAM3AXe5XnKjr2ZNIu60zFkzsX_w"
  img.width = "200"
  img.height = "200"
  img.alt = "Foto do artista"

  songs.forEach((song) => {
    const li = document.createElement("li")
    const ionIcon = document.createElement("ion-icon")
    const h2 = document.createElement("h2")
    const songElement = document.createTextNode(`${song.displayName} / ${song.artist}`)
    ionIcon.setAttribute("name", "play-circle-outline")
    li.appendChild(ionIcon)
    li.appendChild(h2)
    h2.appendChild(songElement)
    ul.appendChild(li)
  })

  songList.appendChild(ul)
  songList.appendChild(figure)

  let playListItems = document.querySelectorAll("#songs-list ul li")
  playListItems.forEach((element,index) => {
    element.addEventListener("click", () => {
      loadSong(songs[index])
      playSong()
    })
  })

}

// control modal
displayCSS(songListBtnClose,"none")
const openModalSongs = () => {
  displayCSS(songListBtnClose, "block")
  displayCSS(songListBtn, "none")
  classCSS("add",songList,"showlist")
  classCSS("add",musicBodyWpr,"ShowMusicBody")
  classCSS("add",body,"overflow-hidden")
}
const closeModalSongs = () => {
  displayCSS(songListBtnClose, "none")
  displayCSS(songListBtn, "block")
  classCSS("remove",songList,"showlist")
  classCSS("remove",musicBodyWpr,"ShowMusicBody")
  classCSS("remove",body,"overflow-hidden")
}

const app = (songs) => {
  createListSongs(songs)
  prevBtn.addEventListener("click", () => prevSong(songs))
  nextBtn.addEventListener("click", () => nextSong(songs))
  playPause.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()))
  audio.addEventListener("timeupdate", updateProgress)
  progress.addEventListener("input", progressSlide)
  volume.addEventListener("click", volumeBar)
  volumeRange.addEventListener("input", setVolume)
  repeatBtn.addEventListener("click", repeat)
  likeBtn.addEventListener("click", like)
  songListBtn.addEventListener("click", openModalSongs)
  songListBtnClose.addEventListener("click", closeModalSongs)
}

start()