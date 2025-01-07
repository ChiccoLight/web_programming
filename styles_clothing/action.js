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

  function furtherPic(){
    let srcName = document.getElementById("pic").src;
    let numb = srcName.at(98);
    if(numb<=1){
      document.getElementById("lt").style.color = "#ddd";
      return;
    }
    else
    numb = Number(numb) - 1;
    numb = String(numb);
    let newSrcName = srcName.slice(0,98) + numb + srcName.slice(99,103);
    document.getElementById("pic").src = newSrcName;
  }

  function ratherPic(){
    let srcName = document.getElementById("pic").src;
    let numb = srcName.at(98);
    numb = Number(numb) + 1;
    numb = String(numb);
    let newSrcName = srcName.slice(0,98) + numb + srcName.slice(99,103);
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