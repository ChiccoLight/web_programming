

// Register Scroll Trigger Plugin
gsap.registerPlugin(ScrollTrigger);


/**
 * @description Function to animate the items in the main section.
 * Fades the items in and moves them up.
 */
gsap.utils.toArray(".item").forEach((item) => {
  gsap.fromTo(
    ".item",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2, // Verzögerung zwischen den Items
      scrollTrigger: {
        trigger: ".row",    // Die gesamte `.row` als Trigger
        start: "top 85%",
        end: "top 50%",
        toggleActions: "play none",
      },
    }
  );
});


// Keep track of the current state of the sidebar
let sidebar = false;


/**
 * @description Function to open the sidebar.
 * Sets the display of the sidebar to block and animates it to the right.
 */
function sidebar_open() {
  if (!sidebar) {
    document.getElementById("sidebar").style.display = "block";
    gsap.to("#sidebar", {
        duration: 0.5,      // Dauer der Animation
        left: 0,            // Sidebar nach 0px (sichtbar) bewegen
        ease: "power3.out"  // Sanfter Übergang
    });
    document.getElementById("sidebarbtn").style.color = "#fff";
    sidebar = true;    // Status aktualisieren
  } else {
    sidebar_close();
  }
}


/**
 * @description Function to close the sidebar.
 * Animates the sidebar to the left and sets the display to none.
 */
function sidebar_close() {
  gsap.to("#sidebar", {
      duration: 0.5,         // Dauer der Animation
      left: -300,            // Sidebar zurück nach -300px bewegen
      ease: "power3.in"      // Sanfter Übergang
  });
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("sidebarbtn").style.color = "#000";
  sidebar = false;       // Status aktualisieren
}


/**
 * @description Function to open the image.
 */
function imgOpen(){
  document.getElementById("pic").style.height = "100%";
}

/*
let b = 1;
let p = 1;
//let srcName = "pictures/clothepics/P" + p + "/B" + b + ".jpg";
  function furtherPic(){
    srcName= document.getElementById("pic").src;
    p=srcName[21];
    b=srcName[24];
    p = 
    alert(b);
    alert(p);
    b = b-1;
    srcName = "pictures/clothepics/P" + p + "/B" + b + ".jpg";
    alert(srcName);
    document.getElementById("pic").src = srcName;
  }
  function ratherPic(){
    let b=1;
    let p=1;
    let srcName = "pictures/clothepics/P" + p + "/B" + b + ".jpg";
    document.getElementById("pic").src = srcName;
    b = b+1;
    srcName = "pictures/clothepics/P1/" + p + "/B" + b + ".jpg";
    alert(srcName);
  }*/

  function furtherPic(N){        //Ruft vorheriges Bild auf
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

  function ratherPic(N){       //Ruft darauffolgendes Bild auf
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


  function sizeColS() {
    document.getElementById("S").style.backgroundColor = "#ddd";
    document.getElementById("M").style.backgroundColor = "#fff";
    document.getElementById("L").style.backgroundColor = "#fff";
    document.getElementById("XL").style.backgroundColor = "#fff";
  }
  function sizeColM() {
    document.getElementById("M").style.backgroundColor = "#ddd";
    document.getElementById("S").style.backgroundColor = "#fff";
    document.getElementById("L").style.backgroundColor = "#fff";
    document.getElementById("XL").style.backgroundColor = "#fff";
  }
  function sizeColL() {
    document.getElementById("L").style.backgroundColor = "#ddd";
    document.getElementById("S").style.backgroundColor = "#fff";
    document.getElementById("M").style.backgroundColor = "#fff";
    document.getElementById("XL").style.backgroundColor = "#fff";
  }
  function sizeColXL() {
    document.getElementById("XL").style.backgroundColor = "#ddd";
    document.getElementById("S").style.backgroundColor = "#fff";
    document.getElementById("M").style.backgroundColor = "#fff";
    document.getElementById("L").style.backgroundColor = "#fff";
  }

  /* SaleSeite */
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
  
