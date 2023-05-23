var memberArray = ['egoing','graphittie','leezche'];
console.group('array loop');
var i = 0;
while(i<memberArray.length){
    console.log(i, memberArray[i]);
    i = i + 1;
}
console.groupEnd('array loop');

var meberObject={
    member:'egoing',
    developer: 'graphittie',
    designer:'leezche'
}
console.group('object loop');
for(let name in meberObject){
    console.log(name,meberObject[name]);
}
console.groupEnd('object loop');