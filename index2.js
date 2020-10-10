const substract = function (firstNum, secondNum) {
    if (typeof firstNum !== "number" || typeof secondNum !== "number") {
        return "ERROR";
    }
    return firstNum - secondNum;
}



console.log(substract("9", 4))
// const result=substruct(7,3) результат в переменную

const substract2 = function (thirdNum, fourthNum) {
    if (typeof thirdNum === "number" || typeof fourthNum === "number") {
        return thirdNum - fourthNum;
    }

    return "ERROR";
}



console.log(substract2(9, 4))




const sayHello = function (name) {
    if (typeof name === "string") {
        // return "Hello," + name;
        return `Hello, ${name}`
    }
}
const name = "Danik"

alert(sayHello(name));