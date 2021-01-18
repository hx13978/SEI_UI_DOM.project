function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}


let beaglePics = " https://dog.ceo/api/breed/beagle/images/random/1"
let huskyPics = " https://dog.ceo/api/breed/husky/images/random/1"
let retrieverPics = " https://dog.ceo/api/breed/retriever/images/random/1"
let spanielPics = " https://dog.ceo/api/breed/spaniel/images/random/1"

let anchorBeagle = document.querySelector('.beagle');
//console.log(anchorBeagle);

function beagleImages() {
  fetch(beaglePics)
    .then(response => response.json())
    .then(json => anchorBeagle.href = json.message[0])
      //console.log(json);

  .catch(err => console.log("Something has gone wrong."))
}

anchorBeagle.addEventListener('click', beagleImages);


let anchorHusky = document.querySelector('.husky');
//console.log(anchorHusky);

function huskyImages() {
  fetch(huskyPics)
    .then(response => response.json())
    .then(json => anchorHusky.href = json.message[0])
      //console.log(json);

  .catch(err => console.log("Something has gone wrong."))
}

anchorHusky.addEventListener('click', huskyImages);




let anchorRetriever = document.querySelector('.retriever');
//console.log(anchorRetriever);

function retrieverImages() {
  fetch(retrieverPics)
    .then(response => response.json())
    .then(json => anchorRetriever.href = json.message[0])
      //console.log(json);

  .catch(err => console.log("Something has gone wrong."))
}

anchorRetriever.addEventListener('click', retrieverImages);


let anchorSpaniel = document.querySelector('.spaniel');
//console.log(anchorSpaniel);

function spanielImages() {
  fetch(spanielPics)
    .then(response => response.json())
    .then(json => anchorSpaniel.href = json.message[0])
      //console.log(json);

  .catch(err => console.log("Something has gone wrong."))
}

anchorSpaniel.addEventListener('click', spanielImages);
       



function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }