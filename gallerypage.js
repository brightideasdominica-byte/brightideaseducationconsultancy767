// ====================== Get DOM Elements ======================
// Grab all the filter buttons inside the ".buttons" container
const btns = document.querySelectorAll('.buttons button');

// Grab all images and videos inside the gallery
const media = document.querySelectorAll('.gallery-images img, .gallery-images video'); 


// ====================== Add Click Event to Buttons ======================
// Loop through each button and attach a click listener
btns.forEach((btn, index) => {
  btn.addEventListener('click', (e) => filterMedia(e, index)); 
});


// ====================== Highlight Active Button ======================
// Function to visually indicate which button is active
function setActiveBtn(e) {
  // Remove the "btn-clicked" class from all buttons
  btns.forEach(btn => btn.classList.remove('btn-clicked'));

  // Add "btn-clicked" class to the clicked button
  e.target.classList.add('btn-clicked');
}


// ====================== Filter Media ======================
// Function that shows/hides images/videos based on button clicked
function filterMedia(e, index) {
  setActiveBtn(e); 

  const btnType = parseInt(e.target.dataset.btn); 

  media.forEach(item => {
    const type = parseInt(item.dataset.img);

    if (btnType === 1 || btnType === type) {
      // Show media that matches filter
      item.classList.remove('img-shrink'); 
      item.classList.add('img-expand');    
      item.style.display = 'block';        
    } else {
      // Hide media that does not match filter
      item.classList.remove('img-expand'); 
      item.classList.add('img-shrink');    
      item.style.display = 'none';         
    }
  });
}


const footerButtons = document.querySelectorAll(".buttons button");
const bodyTag = document.body;

footerButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const clicked = btn.innerText.toLowerCase();

    if (clicked === "images" || clicked === "videos") {
      bodyTag.classList.add("hide-footer");
    } else {
      bodyTag.classList.remove("hide-footer");
    }
  });
});
