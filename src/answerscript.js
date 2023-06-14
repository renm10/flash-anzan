function checkAns() {
    listtotal = localStorage.getItem("total"); //Fetch data from storage
    alert(listtotal);
    var userans = document.getElementById('ansbtn').value;
    if (userans == listtotal)
    {
        alert("正解");
    }
    else
    {
        alert("不正解:(")
    }
    document.getElementById('ansbtn').value = ''; //Clear the answer form
}