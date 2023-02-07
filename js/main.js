// toggleText() toggles the homepage slogan
let i = 0;
function toggleSlogan() {
  i++;
  i = i % 3;
  let id = "slogan" + i;

  document.getElementById("slogan0").style.display = "none";
  document.getElementById("slogan1").style.display = "none";
  document.getElementById("slogan2").style.display = "none";

  document.getElementById(id).style.display = "inline-block";
}

// toggleText() toggles the homepage slogan
let ii = 0;
function toggleWord() {
  ii++;
  ii = ii % 3;
  let id = "word" + ii;

  document.getElementById("word0").style.display = "none";
  document.getElementById("word1").style.display = "none";
  document.getElementById("word2").style.display = "none";

  document.getElementById(id).style.display = "inline-block";
}

const picArray = [
  "img/GuyWithCoffee-bw.jpg",
  "img/action-btn-screenshot.png",
  "img/date-night-movies-screenshot.png",
  "img/pokedexterity-screenshot.png",
  "img/scooby-to-dooby-screenshot.png",
  "img/word-shimmy-screenshot.png",
  "img/Guyatdesk.jpg",
  "img/lofp-screenshot.png",
  "img/best-facts-ever-screenshot.png"
];
let picIndex = 0;

function cyclePic() {
  const imgElement = document.querySelector('#profile__portrait');
  picIndex ++;
  if(picIndex >= picArray.length) picIndex = 0;

  imgElement.src = picArray[picIndex];
}
