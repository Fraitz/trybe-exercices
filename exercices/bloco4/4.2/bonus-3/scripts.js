let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = []; 
let olho = array.length - 1 

for (var index = 0; index < array.length; index += 1) {
    if (index === olho){
        newArray.push(array[index]*2);
    } else {
        newArray.push(array[index]*array[index+1]);
}
}

console.log(newArray);