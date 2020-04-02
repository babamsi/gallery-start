var card = document.getElementsByClassName('card');
for(var i=0; i<card.length; i++) {
  card[i].addEventListener('mouseenter', (e) => {
    e.toElement.classList.add('shadow-lg', 'p-3', 'mb-5', 'bg-white','btn', 'rounded');
    e.toElement.onclick=() => {
      location.href="album.html";
    }
  })
  // card[i].addEventListener('mouseover', (e) => {
  //   e.toElement.classList.remove('shadow-lg', 'p-3', 'mb-5', 'bg-white','btn', 'rounded');
  // })

}

var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for(var i = 1; i<=5; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  thumbBar.appendChild(newImage);
  newImage.onclick = function(e) {
    var imageSrc = e.target.getAttribute('src');
    displayImage(imageSrc);
  }
}
function displayImage(imageSrc) {
  displayedImage.setAttribute('src', imageSrc)
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function() {
  var clas = btn.getAttribute('class');
  if(clas === "dark") {
    btn.setAttribute('class', 'light');
    btn.textContent = "Lighten"
    overlay.style.backgroundColor =" rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
}
