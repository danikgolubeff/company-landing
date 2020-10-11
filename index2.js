const substract = function (firstNum, secondNum) {
    if (typeof firstNum !== "number" || typeof secondNum !== "number") {
        return "ERROR";
    }
    return firstNum - secondNum;
}



console.log(substract("9", 4))
// const result=substruct(7,3) результат в переменную

const substract2 = (thirdNum, fourthNum) => {
    if (typeof thirdNum === "number" || typeof fourthNum === "number") {
        return thirdNum - fourthNum;
    }

    return "ERROR";
}



console.log(substract2(9, 4))




const sayHello = (name) => {
    if (typeof name === "string") {
        // return "Hello," + name;
        return `Hello, ${name}`;
    }
}
const name = "Danik"

alert(sayHello(name));
const numbersArray = [1, 2, 3, 4, 5];

for (let i = 0; i < numbersArray.length; i++) {
    console.log(numbersArray[i]);
}

const secondArray = [11, 22, 33, 44, 55];
const newArray = [];
secondArray.forEach((item, index, currentArray) => {


    console.log(item);

})
newArray.push('e-mail', 'dan.golubev@gmail.com');
console.log('NewArray', newArray);
newArray.pop();
console.log(newArray);

const slicerFunction = (array, deleteConst, insertValue) => {
    // const onemoreArray = [12, 23, 34, 545, 6, 55];
    if (!Array.isArray(array)) {
        return;
    }
    array.splice(0, deleteConst, insertValue);
    return array;
}

console.log(slicerFunction([31, 32, 33, 34, 35], 2, 'done'));






