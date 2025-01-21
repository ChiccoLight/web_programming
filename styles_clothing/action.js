//Global Varable-declaration
let sidebar = false;

function sidebar_open() {
  if (sidebar == false){
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("sidebarbtn").style.color = "#fff";
    sidebar = true;
  }
  else
  sidebar_close();
  //document.getElementById("sidebar-button").style.display = "none";
  }
  
  function sidebar_close() {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("sidebarbtn").style.color = "#000";
    sidebar = false;
  }

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