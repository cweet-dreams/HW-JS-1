// Переменные. Задачи
//1
let price;
const MaxNumber = 999;
const userName = 'Max';
let userInfo;

//2
var test = 'string';
console.log(test);

var x = 'string';
var x = 'string # 2';
console.log(x);

//3
let test = 'string';
console.log(test);

// const x = 'string';
// x = 'string#2';
// console.log(x);

let someVariable = 15;
let someVariable = 10;
console.log(someVariable);


// Строки. Задачи

let string = 'some test string';
let FirstLetter;
let LastLetter;
let CapitalLetterFirst;
let CapitalLetterLast;
let StringPosition;
let SpacePosition;
let SpacePosition2;
let NewString5;
let NewString6;
let NewString7;
let NewString8;
let a = 20;
let b = 16;

//1
FirstLetter = string[0];
LastLetter = string [string.length - 1];
console.log(FirstLetter, LastLetter);

//2
CapitalLetterFirst = string[0].toUpperCase();
CapitalLetterLast = string[string.length - 1].toUpperCase();

console.log(CapitalLetterFirst, CapitalLetterLast);

//3
StringPosition = string.indexOf('string');
console.log(StringPosition);

//4
SpacePosition = string.indexOf(' ');
console.log(SpacePosition);
SpacePosition2 = string.indexOf(' ', 5);
console.log(SpacePosition2);

//5
NewString5 = string.substr(5, 4);
console.log(NewString5);

//6
NewString6 = string.slice(5, 10);
console.log(NewString6);

//7
NewString7 = string.slice(0, -6);
console.log(NewString7);

//8
NewString8 = a.toString() + b.toString();
console.log(NewString8);

//Числа.Задачи

let res;
let resMax;
let resMin;
let resRandom;
let resSum;
let y = 0.6;
let z = 0.7;
let resStr;


//1
res = Math.PI.toFixed(2);
console.log(res);

//2
resMax = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
resMin = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
console.log(resMax, resMin);

//3
resRandom = Math.random().toFixed(2);
resRandom = Math.floor(Math.random() * (9 - 0) + 0);
console.log(resRandom);

//4
resSum = (z + y).toFixed(2);
console.log(resSum);

//5
resStr = parseFloat('100$');
console.log(resStr);

//Задачи.Объект
//1,3
let card = {
    product: 'iphone',
    details: {
        model: '6s',
        color: 'pink'
    }
};

//2
card.price = '1000';
card['currency'] = 'dollar';


console.log(card);