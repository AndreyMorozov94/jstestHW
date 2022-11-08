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