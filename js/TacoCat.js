//This uses an anonymous function to call a named function
document.getElementById("tacoButton").addEventListener("click", function () {
    const wrd1 = document.getElementById("input1").value;
        runTheNumbers(wrd1)
});

document.getElementById("Clear").addEventListener("click", Clear);

//This is the named function, it will only run when something else calls it
function runTheNumbers(wrd1) {
    let wrd2 = "";
    let wrd3 = "";
    for(let loop = 0; loop <= wrd1.length; loop ++){
        wrd2 += wrd1.charAt(loop);
        wrd3 += wrd1.charAt(wrd1.length-loop);
    }
    if(wrd2.localeCompare(wrd3) == 0){
        document.getElementById("result").innerHTML = "PALADINE";
        document.getElementById("result2").innerHTML = `${wrd3}`;
    }
    else
    {
        document.getElementById("result").innerHTML = "NOT A PALADINE";
        document.getElementById("result2").innerHTML = `${wrd3}`;
    }
}

function Clear(){
    document.getElementById("result").innerHTML = "";
    document.getElementById("result2").innerHTML = "";
}