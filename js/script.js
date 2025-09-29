/*
let myName="Amanpreet"
//console.log(myName)

var person;
person = myName+" "+"Chatha";
let greeting="hello";
console.log(greeting, person);

{
    var anotherPerson="Emiley"
    console.log(greeting, " ",anotherPerson);
}
console.log(anotherPerson);
console.log(300==22);
console.log(3**2);
console.log(100%30)

var score=101;
console.log(100!=="100")
console.log(100!="100")
console.log(100==="100")
console.log(100=="100")


var currentTime=11;
console.log(currentTime<9 || currentTime>12)
if(currentTime < 8 || currentTime > 12){
    console.log("time is not between 8 and 12");
}else if(currentTime > 12 && currentTime < 18){
    console.log("time is more than 12");
}else if(currentTime>18){
    console.log("time is more than 18");
}else{
    console.log("time is:",currentTime )
}

var y=true;
console.clear();
console.log(y);
console.log(false!==y);

var age=88;
switch(age>=18 != age<=65 || age>100){
    case true:
        console.log("Eligible for the program");
        break;
    case false:
        console.log("You are not eligible");
        break;
    default:
        console.log("Not eligible");
}


let firstName="Amanpreet", lastName="Chatha";
console.log("Hello",firstName.concat(lastName));
let intro =`this person's name is: ${firstName+" "+lastName}`
console.log(intro)
console.log(firstName=="dvjh"?"Amanpreet":"Satinder")

var array=[];
for(i=1;i<=10;i++){
    for(j=1;j<=10;j++){
        array.push(i*j);
    }
    console.log(array);
    array=[];
    
}
//console.log(array);


var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}

*/


function example(i) {
  return i<10 ? "i is less than 10"
    : i<20 ? "i is less than 20"
    : i<30 ? "i is less than 30"
    : "i is out of range";
}
console.log(example(5));