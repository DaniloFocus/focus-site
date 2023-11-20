const cardImage = document.querySelector('.card img')

window.onload = () => {
    cardImage.src = 'https://i.pinimg.com/originals/80/07/06/800706d729ea7a9d12d421deb4188d05.jpg'
    cardImage.onload = () =>  [
        document.querySelector('.card').classList.remove('loading')
    ]
}