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


let anchor = document.querySelector('.dogimg');

//Section to select Beagle anchor, use a function to fetch a random dog image and assign it to the anchor.src, and then use a click event listener to call the function.

let anchorBeagle = document.querySelector('.beagle');
//console.log(anchorBeagle);

function beagleImages() {
  fetch(beaglePics)
    .then(response => response.json())
    .then(json => anchor.src = json.message[0])
      //console.log(json);

  .catch(err => console.log("Something has gone wrong."))
}

anchorBeagle.addEventListener('click', beagleImages);

//Section to select Husky anchor, use a function to fetch a random dog image and assign it to the anchor.src, and then use a click event listener to call the function.

let anchorHusky = document.querySelector('.husky');
//console.log(anchorHusky);

function huskyImages() {
  fetch(huskyPics)
    .then(response => response.json())
    .then(json => anchor.src = json.message[0])
      //console.log(json);

  .catch(err => console.log("Something has gone wrong."))
}

anchorHusky.addEventListener('click', huskyImages);

//Section to select Retriever anchor, use a function to fetch a random dog image and assign it to the anchor.src, and then use a click event listener to call the function.


let anchorRetriever = document.querySelector('.retriever');
//console.log(anchorRetriever);

function retrieverImages() {
  fetch(retrieverPics)
    .then(response => response.json())
    .then(json => anchor.src = json.message[0])
      //console.log(json);

  .catch(err => console.log("Something has gone wrong."))
}

anchorRetriever.addEventListener('click', retrieverImages);

//Section to select Spaniel anchor, use a function to fetch a random dog image and assign it to the anchor.src, and then use a click event listener to call the function.

let anchorSpaniel = document.querySelector('.spaniel');
//console.log(anchorSpaniel);

function spanielImages() {
  fetch(spanielPics)
    .then(response => response.json())
    .then(json => anchor.src = json.message[0])
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