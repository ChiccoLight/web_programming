
// Initializes javascript, libs and more
init();


/**
 * Initializes necessarry javascript by registering plugins and adding event listener.
 */
function init() {
  // Register Scroll Trigger Plugin
  gsap.registerPlugin(ScrollTrigger);


  // Event listener and functions for dynamic loading of inner html
  document.addEventListener("DOMContentLoaded", function () {
    loadPage("pages/home.html"); // Initializes website with home site
    /**
     * Loads the given page as inner html. The layout of the index stays present.
     * @param {*} page The page to load as inner html in the layout.
     */
    function loadPage(page) {
        fetch(page)
            .then(response => response.text())
            .then(html => {
                document.getElementById("content").innerHTML = html;
                init_GSAP();
            })
            .catch(error => console.error("Fehler beim Laden der Seite:", error));
    }

    // Button events for the navigation
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            let page = this.getAttribute("href");
            if (page) {
                loadPage(page);
            }
        });
    });
  });
}


/**
 * Initializes GSAP and sets animation on the necessarry pages.
 * Animates the fade-in and out of the recommended items.
 * @warning This function as to be called after the inner HTML has been loaded.
 */
function init_GSAP() {
  gsap.utils.toArray(".item").forEach((item, index) => {
      gsap.fromTo(item, 
          { opacity: 0, y: 50 }, 
          { 
              opacity: 1, 
              y: 0, 
              duration: 1.2, 
              ease: "power3.out",
              delay: index * 0.3,
              scrollTrigger: {
                  trigger: item,
                  start: "top 85%",
                  end: "top 30%",
                  toggleActions: "play none none reverse", 
                  once: false,  
                  markers: false 
              }
          }
      );
  });
}


/**
 * Open the sidebar with animation.
 * Sets the sidebar visible and animates it to the right.
 */
function sidebar_open() {
  document.getElementById("sidebar").style.display = "block";
  gsap.to("#sidebar", {
      duration: 0.5,
      left: 0,
      ease: "power3.out"
  });
  document.getElementById("sidebarbtn").style.color = "#fff";
}


/**
 * Close the sidebar with animation.
 * Animates the sidebar to the left and hides the sidebar.
 */
function sidebar_close() {
  gsap.to("#sidebar", {
      duration: 0.5,
      left: -300,
      ease: "power3.in",
      onComplete: function () {
          document.getElementById("sidebar").style.display = "none";
      }
  });
  document.getElementById("sidebarbtn").style.color = "#000";
}


/**
 * Opens the image.
 */
function imgOpen(){
  document.getElementById("pic").style.height = "100%";
}


/**
 * Shows the previous picture.
 * @param {*} N Max image number.
 */
function furtherPic(N){
  let srcName = document.getElementById("pic").src;
  let n = srcName.length;
  srcName = srcName.slice(n-29,n)
  let numb = srcName.at(24);
  if(numb == 1){
    numb = N;
  }
  else{
  numb = Number(numb) - 1;
  }
  numb = String(numb);
  let newSrcName = srcName.slice(0,24) + numb + srcName.slice(25,n);
  document.getElementById("pic").src = newSrcName;
}


/**
 * Shows the next image.
 * @param {*} N Max image number.
 */
function ratherPic(N){
  let srcName = document.getElementById("pic").src;
  let n = srcName.length;
  srcName = srcName.slice(n-29,n)
  let numb = srcName.at(24);
  if(numb == N){
    numb = 1;
  }
  else{
  numb = Number(numb) + 1;
  }
  numb = String(numb);
  let newSrcName = srcName.slice(0,24) + numb + srcName.slice(25,n);
  document.getElementById("pic").src = newSrcName;
}


/**
 * Sets the size of the selected item and displays it.
 * @param {string} size The size of the item. Can be 'S' 'M' 'L' 'XL'.
 */
function setSize(size) {
  let sizes = ["S", "M", "L", "XL"];
  sizes.forEach(s => document.getElementById(s).style.backgroundColor = "#fff");
  switch (size) {
      case "S":
      case "M":
      case "L":
      case "XL":
          document.getElementById(size).style.backgroundColor = "#ddd";
          break;
      default:
          console.warn("Invalid size:", size);
  }
}













gsap.to(".headerRightBlink", {
  opacity: 0.5,  // Blinken durch Reduktion der Sichtbarkeit des Bildes
  duration: 0.8,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});

document.getElementById('scrollToTop').addEventListener('click', function() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'  // Sanftes Scrollen
  });
});
  
