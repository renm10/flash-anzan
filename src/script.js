function sendDiffLvl() {
    var difflvl = document.getElementById('difflist');
    if (difflvl.options[difflvl.selectedIndex].value == "select")
    {
        alert("難易度を選んでください");
    }
    else
    {
        localStorage.setItem("difficulty", difflvl.options[difflvl.selectedIndex].value); //Save the difficulty level's value
        window.location.href = "game.html";
    }
}