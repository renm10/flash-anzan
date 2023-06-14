let min = 1; //Minimum
let max = 99; //Maximum
const countDownsec = 3; //Seconds it waits before starting
let cdcounter = countDownsec; //Counter that counts the wait time
let i = 0; //counter to go through the list of numbers
let numberList; //List of Random numbers
let listtotal; //Total of the list of numbers
const flashElm = document.getElementById('number-label');
let flashinterval = null; //interval for flash action
let cdinterval = null; //interval for countdown

function startGame() {
    if (flashinterval)
    {
        clearInterval();
        return;
    }
    //Create random number list
    numberList = createRandList();

    listtotal = calcTotal(numberList); //Calculate total
    localStorage.setItem("total", listtotal); //Save the total
    alert(listtotal); //DELETE LATER
    alert("Hit OK If you are Ready!!");
    cdinterval = setInterval(countDown, 1000);
    runFlash();
    redirectAns();
}

function flashInterval() {
    flashinterval = setInterval(updateNumber, 500, numberList);
}

function runFlash() {
    setTimeout(flashInterval, 4000);
}

//Redirect user to answer page
function jumpToAns() {
    window.location.href = "answer.html";
}

function redirectAns() {
    setTimeout(jumpToAns, 10000);
}

function countDown() {
    if (cdcounter == 0) //Stop at 0 sec
    {
        clearInterval(cdinterval);
        cdinterval = null;
        cdcounter = 3;
    }
    else
    {
        flashElm.innerHTML = 'あと' + `${cdcounter}` + '秒';
        cdcounter--;
    }
}

function createRand() {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}

function createRandList()
{
    var numList = [];
    for (let i = 0; i < 10; i++)
    {
        num = createRand();
        numList.push(num);
    }
    return numList;
}

function calcTotal(list) {
    var total = 0;
    for (let i = 0; i < 10; i++)
    {
        total += list[i];
    }
    return total;
}

function updateNumber(list) {
    if (i == 10) //Stop at the 10th element
    {
        clearInterval(flashinterval);
        flashinterval = null;
        i = 0;
        flashElm.innerHTML = ``;
    }
    else
    {
        flashElm.innerHTML = `${list[i]}`;
        i++;
    }
}