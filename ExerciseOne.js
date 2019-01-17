alert("Hello World!");
var notHisName = "But his name wasn't Elliot...";
alert(notHisName)
console.log(notHisName)
document.write(notHisName)

function squared(x){
return x * x;
}
let testNumber = 3;
console.log(squared(testNumber));

function sum(a,b,c){
    return a + b + c;
}

let numOne = 6;
let numTwo = 4;
let numThree = 11;
console.log(sum(numOne,numThree,numTwo));

let human = {
    name:"Jack",
    age:24,
    occupation:"Professional cat tamer"
}

console.log(human);

human.name = "Cassandra";
console.log(human);

function increaseAge(person){
    person.age += 1;
    console.log(person);
}

function changeAttributes(person){
    if (document.getElementById("personName").value != "") {
        person.name = document.getElementById("personName").value;
    }
    if (document.getElementById("personAge").value != "") {
        person.age = document.getElementById("personAge").value;
    }
    if (document.getElementById("personOccupation").value != "") {
        person.occupation = document.getElementById("personOccupation").value;
    }
    console.log(person);
    document.getElementById("personOutput").innerHTML = "Name: " + person.name + "<br>Age: " + person.age + "<br>Occupation: " + person.occupation;
}

let oddlySpecificProclamation = " He said \"My name is Elliott\" ";
console.log(oddlySpecificProclamation);
console.log(oddlySpecificProclamation.toUpperCase());

console.log("word".concat(numOne));

let stringArray = ["One","Two","Three"];
console.log(stringArray);
stringArray.push("Four");
console.log(stringArray);
stringArray.splice(-1);
console.log(stringArray);

function isAgeBetween20And40(person){
    if (person.age > 19 && person.age < 41) {
        return true;
    } else {
        return false;
    }
}
console.log(isAgeBetween20And40(human));

for(x = 0; x <= 10; x+1) {
    if (x % 2 == 0){
    console.log(x);
    }
    x += 1;
}
