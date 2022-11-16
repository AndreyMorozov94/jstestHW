//1 задание
let input_number = prompt("введите значение");
input_number = +input_number;
console.log (typeof input_number);

if (input_number% 2 ===0) {
  console.log ("четное");
}
else if (input_number%1 ===0) {
  console.log ("нечетное");
}
else {
  console.log("Упс, кажется вы ошиблись")
}