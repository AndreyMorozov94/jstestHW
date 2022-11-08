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