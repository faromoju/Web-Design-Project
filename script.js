// Image Scroller Function
let slideIndex = 0;
showSlides();

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  let newSlides
  slides[slideIndex-1] = newSlides;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000); // Change image every 2 seconds
}

// Button Active Class Function
var btns = document.getElementsByClassName("dot");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

window.addEventListener("load" , function (){
  $(".previous_button").on("click",function(){ scroll(this,false); });
  $(".next_button").on("click",    function(){ scroll(this,true); });
});

function scroll(elem,next){
  let target  = $(elem).siblings(".data_preview_area");
  let width   = target.outerWidth()
  if (next){
    target.animate({ scrollLeft:"+=" + String(width) } , 150);
  }
  else{
    target.animate({ scrollLeft:"-=" + String(width) } , 150);
  }
}

  // Select all elements with the "i" tag and store them in a NodeList called "stars"
  var stars = document.querySelectorAll("#star1 i");

  // Loop through the "stars" NodeList
  stars.forEach((star, index1) => {
    // Add an event listener that runs a function when the "click" event is triggered
    star.addEventListener("click", () => {
      // Loop through the "stars" NodeList Again
      stars.forEach((star, index2) => {
        // Add the "active" class to the clicked star and any stars with a lower index
        // and remove the "active" class from any stars with a higher index
        index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
      });
    });
  });