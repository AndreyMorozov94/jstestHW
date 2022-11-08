//1 задание
let input_number = +prompt("введите значение");
console.log (typeof input_number);
if (typeof input_number === "number" && !(typeof input_number === "NaN")){
  let odd_even = input_number%2;
  if (odd_even === 0){
    console.log("Число чётное.");
  } else {
    console.log("Число нечётное.");
  }
}else {
    console.log("Упс, кажется, вы ошиблись");
}
//2 задание
let x = 231;
function whichtype () {
    let type_of_x = typeof x;
    switch(type_of_x) {
        case 'number' :
            type_of_x = 'число';
            break;
        case 'bigint' :
            type_of_x = 'число больше, чем (2^53-1)';
            break;
        case 'string':
            type_of_x = 'строка';
            break;
        case 'boolean' :
            type_of_x = 'логический тип';
            break;
        case 'null' :
            type_of_x = 'неизвестное';
            break;
        case 'undefined' :
            type_of_x = 'значениене присвоено';
            break;           
    };
  console.log(`${x} - ${type_of_x}`)
}
whichtype ();
x = true;
whichtype ();
x = 'Hello';
whichtype ();
//3 задание
let str = "hello world";
let reverse = str.split('').reverse().join('');

console.log(reverse); 
//4 задание
let num = Math.floor(Math.random() * 101);
console.log (num);
//5 задание
let x = [1, 54, 145, 3, 1245]
    console.log (x.length);
for (let i=0; i < x.length; i++){
  console.log (x[i]);
};
//6 задание
let arr = [1, 1, 1, 1]
function identical(arr) {
    for(var i = 0; i < arr.length - 1; i++) {
        if(arr[i] !== arr[i+1]) {
            return false;
        }
    }
    return true;
}
console.log(identical(arr));
//7 задание
let arr = [4, 7, 1, 1, null, 0, 0]
let sumOdd = 0;
let sumPar = 0;
let sumZero = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumPar++;
    } else {
      sumOdd++;
  }
  if (arr[i]  === 0){
    sumZero += 1;
  }
}
console.log("Odd : " + sumOdd);
console.log("Par : " + sumPar);
console.log("Zero : " + sumZero);
//8 задание
let  fruit = new Map([

    ["apple", "green"],
  
    ["strawberry", "red"],
  
    ["blueberry",    "blue"]
  
  ]);
  fruit.forEach((value, key) => {
      console.log(`${key} - 'x' = ${value} - 'y'`);
  });
  
