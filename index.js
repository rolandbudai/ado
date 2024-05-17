
let szul = document.getElementById('szul');
let adoaz = document.getElementById('adoaz');
const button = document.getElementById('button');
const fdate = "1867-01-01";

let calc = function(){
    
    let date1 = new Date(fdate)
    let date2 = new Date(szul.value)

    let Difference_In_Time =
    date2.getTime() - date1.getTime();

    // Calculating the numbers of days between two dates
    let Difference_In_Days =
        Math.round
            (Difference_In_Time / (1000 * 3600 * 24));


    let rnd =  Math.floor(Math.random()* (999 - 100) + 100);     

    //display the adoazonosito number
    let temp = `8${Difference_In_Days}${rnd}`;

    let digit10 =  (Number(temp[0]) +
    Number((temp[1])*2) +
    Number((temp[2])*3) +
    Number((temp[3])*4) +
    Number((temp[4])*5) +
    Number((temp[5])*6) +
    Number((temp[6])*7) +
    Number((temp[7])*8) +
    Number((temp[8])*9)) % 11
   
    console.log(digit10);    

    if (digit10 == 10) {alert("HIBÁS SZÁM - GENERÁLJ ÚJAT!")} else {digit10 = digit10};

    console.log(digit10);    

    adoaz.innerHTML = temp;
}

////run the calculation with button click
button.addEventListener('click', calc);

