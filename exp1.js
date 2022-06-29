//cascading of function calls

// function sortstr(str)
//   {
// return str.split("").sort().join("");
//   }
// console.log(sortstr("webmaster"));

//creating objects
var myPenguin = {name : 'Yeshh', origin:'India', livingarea:'Bhimavaram'}
console.log("Hello, I'm a penguin and my name is "+ myPenguin.name)
myPenguin.canFly = false
myPenguin.chirp = function(){
  console.log("CHIRP CHIRP! Is this what penguins sound like?" )
}
myPenguin.chirp()
myPenguin.sayHello=function(){
  console.log("Hello, I'm a penguin and my name is "+ this.name)
}
myPenguin.sayHello()
myPenguin.name = "Penguin McPenguinFace" 
myPenguin.sayHello()

myPenguin.fly=function(){
  if(this.canFly)
    console.log("I can fly!")
  else  console.log("I cant fly!")
}
myPenguin.fly()
myPenguin.canFly = true
myPenguin.fly()
for(prop in myPenguin){
  console.log(prop)
}
for(prop in myPenguin){
  console.log(myPenguin[prop])
}