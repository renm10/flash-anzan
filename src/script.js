function sendDiffLvl() {
    var difflvl = document.getElementById('difflist');
    localStorage.setItem("difficulty", difflvl.options[difflvl.selectedIndex].value); //Save the difficulty level's value
    alert(difflvl.options[difflvl.selectedIndex].value);
}