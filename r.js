//printing statement
console.log("example node js application")

//addition of two numbers
num1 = 1
num2 = 2
console.log("addition="+num1+num2)

//printing list of elements based on sorted order based on alphabets
var items = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair'];
items. sort(function (a, b) {
return a. localeCompare(b); //using String.prototype.localCompare()
});
console.log(items)

//printing the string in apha order
function sort(str) {
    return str.split('').sort((a, b) => a.localeCompare(b)).join('');
}
console.log(sort('Ramya'));

//pring string
var exstr = "ramya";
console.log(exstr)

//callback function
function verifylogin(user, pwd, callback){
    if(pwd == "pwd1")
        callback(null, "valid login")
    else
        callback("invalid login", null)

}
verifylogin('user1', 'pwd1', function(err, result){
    if(err)
        console.log(err)
    else
        console.log(result)
})

//
console.log("program is waiting")
setTimeout(() => {
    console.log("inside timeout")
}, 2000);

console.log("after time out")
console.log("program ending")

//
var mypenguine = {name : "penguine", origin : "antartatic", livingarea: "iglu"};
console.log("Hello, I'm a penguine and my name is " + mypenguine.name)
// mypenguine.canFly = false
// console.log(mypenguine)

// mypenguine.chirp = function(){
//     console.log("chirpi chirpi is this what penguine should sound")
// }

// mypenguine.chirp()

// mypenguine.sayHello()

// mypenguine.name = "penguine my penguineface"
// mypenguine.sayHello()

// mypenguine.fly = function(){
//     if(this.canFly)
//         console.log("i can fly")
//     else
//         console.log("no flying for me")
// }

// mypenguine.fly()

// mypenguine.canFly= true
// mypenguine.fly()

// for(property in mypenguine){
//     console.log(property);
// }
// // for(property in mypenguine){
// //     console.log(mypenguine property);
// // }
