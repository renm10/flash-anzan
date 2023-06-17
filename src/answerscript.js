function checkAns() {
    listtotal = localStorage.getItem("total"); //Fetch data from storage
    var resulttext = document.getElementById('resulttext');
    var userans = document.getElementById('anstextbox').value;
    if (userans == '')
    {
        alert("もう一度入力してください");
    }
    else if (userans == listtotal)
    {
        resulttext.innerHTML = '正解';
        document.getElementById('correctanstext').innerHTML = '正しい答え：' + `${listtotal}`;
    }
    else
    {
        resulttext.innerHTML = '不正解';
        document.getElementById('correctanstext').innerHTML = '正しい答え：' + `${listtotal}`;
    }
    document.getElementById('anstextbox').value = ''; //Clear the answer form
}