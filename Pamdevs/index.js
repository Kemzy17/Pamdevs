function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.backgroundColor = "rgb(0, 0, 0, 0.5)";
    document.body.style.transition = "0.5s"

}
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "rgb(0, 0, 0, 0)";
    document.body.style.transition = "0.5s"
}


topnav = document.getElementById("topnav");

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    topnav.style.backgroundColor = "wheat";
    topnav.style.transition = "0.3s";
    topnav.style.height = "25px";
    document.getElementById("pam").style.color = "black";
    document.getElementById("link1").style.color = "black";
    document.getElementById("link2").style.color = "black";
    document.getElementById("link3").style.color = "black";
    document.getElementById("link4").style.color = "black";
    
  } else {
    topnav.style.backgroundColor = "transparent";
    document.getElementById("pam").style.color = "#c4c7c9";
    document.getElementById("link1").style.color = "#c4c7c9";
    document.getElementById("link2").style.color = "#c4c7c9";
    document.getElementById("link3").style.color = "#c4c7c9";
    document.getElementById("link4").style.color = "#c4c7c9";
  }
}

// var slideshows = document.querySelectorAll('[data-component="slideshow"]');
  
// // Apply to all slideshows that you define with the markup wrote
// slideshows.forEach(initSlideShow);

// function initSlideShow(slideshow) {

//   var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Get an array of slides

//   var index = 0, time = 5000;
//   slides[index].classList.add('active');  
  
//   setInterval( () => {
//     slides[index].classList.remove('active');
    
//     //Go over each slide incrementing the index
//     index++;
    
//     // If you go over all slides, restart the index to show the first slide and start again
//     if (index === slides.length) index = 0; 
    
//     slides[index].classList.add('active');

//   }, time);
// }

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}