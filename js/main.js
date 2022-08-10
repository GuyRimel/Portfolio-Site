// toggleText() toggles the homepage slogan
let i = 0;
function toggleSlogan() {
    i++;
    i = i % 3;
    let id = "slogan" + i;

    document.getElementById('slogan0').style.display = "none";
    document.getElementById('slogan1').style.display = "none";
    document.getElementById('slogan2').style.display = "none";

    document.getElementById(id).style.display = "inline-block";
}

// toggleText() toggles the homepage slogan
let ii = 0;
function toggleWord() {
    ii++;
    ii = ii % 3;
    let id = "word" + ii;

    document.getElementById('word0').style.display = "none";
    document.getElementById('word1').style.display = "none";
    document.getElementById('word2').style.display = "none";

    document.getElementById(id).style.display = "inline-block";
}