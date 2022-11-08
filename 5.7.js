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