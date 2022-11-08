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