let min = 0; //Minimum
let max = 0; //Maximum
let listsize; //Size of the list OR Number of numbers flashing (口数)
let flashtime; //Total time numbers flash (時間)
let flashsec; //Time inbetween each flash(in millisec) 
let numberList; //List of Random numbers
let listtotal; //Total of the list of numbers
const countDownsec = 3; //Seconds it waits before starting
let cdcounter = countDownsec; //Counter that counts the wait time
let i = 0; //counter to go through the list of numbers
const flashElm = document.getElementById('number-label');
let difflevel; //VALUE of the difficulty level selected by the player in the prev page
let flashinterval = null; //interval for flash action
let cdinterval = null; //interval for countdown

difflevel = localStorage.getItem("difficulty"); //Fetch difficulty data from storage
setDifficulty(difflevel);

function startGame() {
    if (flashinterval)
    {
        clearInterval();
        return;
    }
    //Hide the Buttons and the cursor
    document.getElementById('startbtn').style.display = "none";
    document.getElementById('backbtn').style.display = "none";
    document.body.style.cursor = 'none'; 

    //Create random number list
    numberList = createRandList();

    listtotal = calcTotal(numberList); //Calculate total
    localStorage.setItem("total", listtotal); //Save the total
    cdinterval = setInterval(countDown, 1000); //Start count down until actual flash starts
    runFlash(); //Run the actual flash numbers
    redirectAns(); //Redirect user to the answer page
}

function setDifficulty(difficulty) {
    //Set Maximum and minimum
    if (difficulty == 'fivedan' || difficulty == 'fourdan' || difficulty == 'threedan' || difficulty == 'twodan')
    {
        min = 1;
        max = 999;
    }
    else
    {
        min = 1;
        max = 99;
    }
    //Set number of numbers flashing and total time (口数と時間)
    switch (difficulty) {
        case "fivedan":
            listsize = 10;
            flashtime = 7;
            break;
        case "fourdan":
            listsize = 8;
            flashtime = 6;
            break;
        case "threedan":
            listsize = 6;
            flashtime = 5;
            break;
        case "twodan":
            listsize = 4;
            flashtime = 4;
            break;
        case "onedan":
            listsize = 15;
            flashtime = 10;
            break;
        case "onekyu":
            listsize = 15;
            flashtime = 13;
            break;
        case "twokyu":
            listsize = 12;
            flashtime = 12;
            break;
        case "threekyu":
            listsize = 10;
            flashtime = 12;
            break;
        case "fourkyu":
            listsize = 8;
            flashtime = 11;
            break;
        case "fivekyu":
            listsize = 7;
            flashtime = 10;
            break;
        case "sixkyu":
            listsize = 6;
            flashtime = 9;
            break;
        case "sevenkyu":
            listsize = 5;
            flashtime = 8;
            break;
        case "eightkyu":
            listsize = 4;
            flashtime = 7;
            break;
        case "ninekyu":
            listsize = 3;
            flashtime = 6;
            break;  
        case "tenkyu":
            listsize = 2;
            flashtime = 4;
            break;        
        default:
            alert("難易度を選んでください");
    }
    flashsec = (flashtime / listsize) * 1000;
}

function updateNumber(list) {
    if (i == listsize) //Stop at the last element
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

function flashInterval() {
    flashinterval = setInterval(updateNumber, flashsec, numberList);
}

//Shows the first number in the list instantly without waiting for the interval
function showFirst(list) {
    flashElm.innerHTML = `${list[0]}`;
    i++;
}

//Show the rest of the numbers in the list with the interval
function runFlash() {
    setTimeout(showFirst, 4000, numberList); //Show first element
    setTimeout(flashInterval, 4000);
}

//Redirect user to answer page
function jumpToAns() {
    window.location.href = "answer.html";
}

function redirectAns() {
    var waitTime = (1000 * flashtime) + 4500;
    setTimeout(jumpToAns, waitTime);
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
    for (let i = 0; i < listsize; i++)
    {
        num = createRand();
        numList.push(num);
    }
    return numList;
}

function calcTotal(list) {
    var total = 0;
    for (let i = 0; i < listsize; i++)
    {
        total += list[i];
    }
    return total;
}