function getRandomBoolean() {
    return Boolean(Math.round(Math.random()));
}

//const randomBoolean = getRandomBoolean();
// if (randomBoolean) {
//     var name='Ildar,Zarina';
//     alert(name.split(',')[1])
//     //alert(name.substring(2,3));
// } else {
//     alert('false');
// }
let randomBoolean=true
while (randomBoolean===true) {
    console.log('хоть нима');
    randomBoolean=getRandomBoolean();
}