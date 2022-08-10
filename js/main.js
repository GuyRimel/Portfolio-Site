// toggleText() toggles the homepage slogan
let i = 0;
function toggleText() {
    i++;
    i = i % 3;
    let id = "phrase" + i;

    document.getElementById('phrase0').style.display = "none";
    document.getElementById('phrase1').style.display = "none";
    document.getElementById('phrase2').style.display = "none";

    document.getElementById(id).style.display = "inline-block";
}