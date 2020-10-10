alert('Hi, dud');
function substruct(firstNum, secondNum) {
    if (typeof firstNum !== "number" || typeof secondNum !== "number") {
        return "ERROR";
    }
    return firstNum - secondNum;
}



console.log(substruct("9", 4))