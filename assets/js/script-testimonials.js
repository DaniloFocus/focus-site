var currentIndex = 0;
var maxIndex = 0;

function init () {
  //first slide display block;
  var slides = document.getElementsByClassName('slide');
  slides[currentIndex].style.display = 'flex';
  maxIndex = slides.length-1;
}
init(); 

function previous () {
  var slides = document.getElementsByClassName('slide');
  slides[currentIndex].style.display = 'none';
  if(currentIndex == 0) {
     currentIndex = maxIndex;
  }else {
    currentIndex--;  
  }
  slides[currentIndex].style.display = 'flex';

}

function next () {
  var slides = document.getElementsByClassName('slide');
  slides[currentIndex].style.display = 'none';
  
  if(maxIndex == currentIndex) {
     currentIndex = 0;
  }else {
    currentIndex++;  
  }
  slides[currentIndex].style.display = 'flex';

}
