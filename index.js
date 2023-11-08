//get modal and modal btn 
const modals = document.querySelectorAll('.modal');
const modalBtn = document.querySelectorAll(".info-btn");

//disables scroll on modal mode
function disableScroll(){
    document.body.style.overflow = 'hidden';
}

//enable scroll
function enableScroll(){
    document.body.style.overflow = 'auto';
}

//open a specific modal
function openModal(target){
    modals.forEach((modal) => {
        if(modal.dataset.modal === target){
            modal.style.display = 'flex';
        }
    });
    disableScroll();
}

//close specific modal
function closeModal(target){
    modals.forEach((modal) => {
        if(modal.dataset.modal === target){
            modal.style.display = 'none';
        }
    });
    enableScroll();
}

//click event listeners to btns, opens respective modals.
modalBtn.forEach((button) => {
    button.addEventListener('click', function(){
        const target = this.getAttribute('data-target');
        openModal(target);
    });
});

//click event listeners to btns, closes modals.
document.querySelectorAll('.close').forEach((closeBtn) => {
    closeBtn.addEventListener('click', function(){
        const target = this.parentElement.parentElement.getAttribute('data-modal');
        closeModal(target);
    });
});

//click event listener to close modals when clicking outside content
window.addEventListener('click', function(event){
    if(event.target.classList.contains('modal')){
        const target = event.target.getAttribute('data-modal');
        closeModal(target);
    }
});

//change navbar bg on scroll
const navbar = document.getElementById("navbar");
const navdiv = document.getElementById("about");
const targetDivOffset = navdiv.offsetTop;

function handleScroll(){
    if(window.scrollY >= targetDivOffset){
        // navbar.style.backgroundImage = 'url("/assets/hero.svg")';
        navbar.classList.add("background");
    }
    else{
        // navbar.style.backgroundImage = 'none';
        // navbar.style.backgroundColor = 'transparent';
        navbar.classList.remove("background");
    }
}

window.addEventListener('scroll', handleScroll);

//remove nav target if page is refreshed

// Check if the page is being refreshed
const isRefreshed = window.performance.getEntriesByType("navigation")[0].type === 'reload';

if (isRefreshed) {
    // Page is being refreshed, clear the URL fragment
    window.location.href = window.location.href.split('#')[0];
}

//Toast Notification
function toast(){
Toastify({
  text: "Text Copied!",
  duration: 3000,
  close: true,
  gravity: "bottom", // `top` or `bottom`
  position: "center", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #08888a, #800e90)",
  },
  onClick: function () {}, // Callback after click
}).showToast();

}

// Add a click event listener to elements with the "data-clipboard" attribute
document.querySelectorAll('[data-clipboard]').forEach((element) => {
  element.addEventListener("click", copyText);
});

function copyText(event) {
  const textToCopy = event.target.innerHTML;
  const clipboardId = event.target.getAttribute('data-clipboard');

  if (clipboardId === "email") {
    navigator.clipboard.writeText(textToCopy).then(() => {
      toast();
    });
  } else if (clipboardId === "num") {
    navigator.clipboard.writeText(textToCopy).then(() => {
      toast();
    });
  }
}

//Change Flickity settings on mobile mode
// function updateFlickity(){
//     const isMobile = window.innerWidth <= 900;
//     const carousel = document.querySelector('.main-carousel');

//     if(isMobile){
//         carousel.setAttribute(
//           "data-flickity", '{ "cellAlign": "center", "contain": true, "prevNextButtons": false, "autoPlay": true }'
//         )
//     }else{
//         carousel.setAttribute(
//           "data-flickity", '{ "cellAlign": "center", "contain": true}'
//         );        
//     }
// }

// window.addEventListener("load", updateFlickity);
// window.addEventListener("resize", updateFlickity);



