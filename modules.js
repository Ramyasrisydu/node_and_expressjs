// var fs = require("fs")
// fs.readFile("./text.txt","utf8", function(err, data){
//     if(err)
//         console.log("error in file")
//     else
//         console.log(data.toUpperCase())
// })

// var os = require("os")
// console.log(os.hostname())
// console.log(os.platform())
// console.log(os.constants)
// console.log(os.version)

// var cowsay = require("cowsay")
// console.log(cowsay.say({text: "my text", e : "mm", T : "u"}))

// var chalk = require("chalk")
// console.log(chalk.blue('Hello world!'));

var calcy = require("./calcy")
console.log(calcy.add(5, 6))
console.log(calcy.sub(5, 6))
console.log(calcy.mul(5, 6))
calcy.div(12, 0, (err, result)=>{
    if(err)
        console.log(err)
    else
        console.log(result)
})

//
var book = {title:"core java", Author: "habsiba", price: 5000}
var jsonbook =  JSON.stringify(book)
console.log(jsonbook)
console.log(book)

var bookobj = JSON.parse(jsonbook)
for(ele in bookobj)
    console.log(ele + ":" + bookobj[ele])

//prepare txt file with json data and convert to obj then read
