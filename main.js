//ARRAYS
//exercise 1

const myBreakfast = ["yoghurt", "toast", "cereal", "coffee"];

myBreakfast.push("tea");
myBreakfast.unshift("milk")
console.log(myBreakfast.length + myBreakfast)

//exercise 2


function lastitem(myBreakfast) {
  return myBreakfast[myBreakfast.length - 1];
}
console.log(lastitem(myBreakfast));

//exercise 3

const musicGenres = ["rock", "rap"];
console.log(musicGenres)
musicGenres.push("jazz");
console.log(musicGenres)
musicGenres[(musicGenres.length-1) / 2] = "classical"
console.log(musicGenres)
musicGenres.unshift("blues", "reggae")
console.log(musicGenres)

//exercise 4

function sorts(myBreakfast){
  return myBreakfast.sort()
}
console.log(sorts(myBreakfast));


//LOOPS
//exercise 1

let num = 0
let numRev = 11

while (num < 10) {
  console.log("number", num + 1)
;
num++;}


while (num < 10) {
  console.log("number", (numRev - 1))
;
num++;
numRev--;}

//exercise 1 alt

for (let numb = 0; numb < 10; numb++) {

  console.log(numb+1);

}


for (let numb = 10; numb > 0; numb--) {

  console.log(numb);

}

//exercise 2

const tasks = ["cleaning", "vacuuming", "laundry", "crying"];

for (let i=0; i < (tasks.length); i++) {
console.log(`Task ${i+1}: ${tasks[i]}`)
}

//exercise 3

// let t = 3;
// 
// while (t) {
  // alert(t--);
// } 
//what?
//answer = 0


//exercise 4
for (let b=1; b < 11; b++){
  if(b % 2 == 0){
    console.log(b);
  }
}

//exercise 5

// for (let g = 0; g < 3; g++){
// alert(`number ${g}!`);
// }

// let g = 0
// while (g < 3) {
  // alert(`number ${g}!`)
  // g++
// }



//exercise 6
console.log("exercise 6")
let myList = [2, 4, 63, 12, 23]
let sumOfNum = 0;
function sumInput(myList) {
  for (let o = 0; o < myList.length; o++){
sumOfNum += myList[o]
  }
return sumOfNum / myList.length;
}
console.log(sumInput(myList));

