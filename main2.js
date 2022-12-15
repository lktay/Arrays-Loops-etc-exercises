//Strings 
//Exercise 1

stringExample1 = "WHERE IS THE FULLSTOP KIDS"
function addFullStop(stringExample1){
  if (stringExample1.charAt(stringExample1.length-1) != ".") {
    stringFix = stringExample1 + ".";
  }
  else {
    stringFix = stringExample1;
  }
  return stringFix
}
console.log(addFullStop(stringExample1))


//Exercise 2

let stringExample2 = "TAYLOR"



function capitalise(stringExample2){

  if (typeof stringExample2 != "string"){
return alert("this is not a string")
  }
else {
  stringExample2 = stringExample2[0].toUpperCase() + stringExample2.slice(1).toLowerCase();
}
return stringExample2
}
console.log(capitalise(stringExample2))


//foreach
//exercise 1


const myFavouriteFoods = ["smash", "curry", "pie", "burg"];

myFavouriteFoods.forEach(logItem);

function logItem(item, index, arr) {
  console.log(item);
}

//exercise 2 

const numArray = [2, 4, 5, 50, 25, 15, 3]
sumOf = 0

numArray.forEach(sum);
function sum(numArray){
  
  sumOf+= numArray;
  return sumOf

}
console.log(sumOf)

//exercise 3

productOf = 1

numArray.forEach(pro);
function pro(numArray){
  
  productOf *= numArray;
  return productOf

}
console.log(productOf)

//exercise 4 

const studentGrades = [70, 20, 53, 64, 78, 60, 32]

function passedGrades(studentGrades){
  if (studentGrades >= 50) {
  console.log(studentGrades)}
}
studentGrades.forEach(passedGrades);


//join exercises
//exercise 1 

const studentNames = ["leoni", "ken", "jari", "erik", "robin"]

let studentList = studentNames.join(" ")
console.log(studentList);


function toCSV(studentNames) {
  let exampleCSV = studentNames.join();
return exampleCSV;
}
console.log(toCSV(studentNames))
