// var fs=require('fs')

// fs.readFile("./text.txt","utf8",function(err, data){
//     if(err)
//         console.log("error in reading file")
//     else
//         console.log(data.toUpperCase())
// })

//utf8 is used as 2nd parameter to get text in character format

// var os=require('os')
//  console.log(os.hostname(),os.homedir(),os.getPriority(),os.platform(),os.userInfo())

//var cowsay = require("cowsay");

// console.log(cowsay.say({
//     text : "I'm a moooodule",
//     e : "ee",
//     T : "V "
// }));


// var chalk=require("chalk");

// console.log(chalk.blue("Hello world!"));
// Importing the chalk module
// const chalk=require("chalk");

// Coloring different text messages
// console.log(chalk.green("Welcome to Tutorials Point"))
// console.log(chalk.red.underline("Welcome to Tutorials Point"))
// console.log(chalk.red.underline.bold("Welcome to Tutorials Point"))

//  var calc=require("./calc")
//  console.log(calc.add(20,10))
//  console.log(calc.sub(20,40))
//  console.log(calc.mul(20,10))
//  calc.div(12,20,(err,result)=>{
//      if(err)
//         console.log(err)
//      else 
//         console.log(result)
//  })

// var book={title:"Core Java", author:"Herbert Shield", price:500.00, publisher:"Tata McGrill", pages:443}
// var jsonbook=JSON.stringify(book)
// console.log(jsonbook)
// var bookobj=JSON.parse(jsonbook)
// for(ele in bookobj)
//     //console.log(ele)
//     console.log(ele+":"+bookobj[ele])




//prepare 1 text file with json Data
//read that in nodejs application and print by converting the obj using foreach statement

//const chalk = require('chalk');

//console.log(chalk.blue('Hello world!'));

// var chalk=require('chalk')
// const log = console.log
// // Combine styled and normal strings
// log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// // Compose multiple styles using the chainable API
// log(chalk.blue.bgRed.bold('Hello world!'));

// // Pass in multiple arguments
// log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// // Nest styles
// log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// // Nest styles of the same type even (color, underline, background)
// log(chalk.green(
// 	'I am a green line ' +
// 	chalk.blue.underline.bold('with a blue substring') +
// 	' that becomes green again!'
// ));

// log(chalk`
// CPU: {red ${cpu.totalPercent}%}
// RAM: {green ${ram.used / ram.total * 100}%}
// DISK: {rgb(255,131,0) ${disk.used / disk.total * 100}%}
// `);

// // Use RGB colors in terminal emulators that support it.
// log(chalk.keyword('orange')('Yay for orange colored text!'));
// log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
// log(chalk.hex('#DEADED').bold('Bold gray!'));

// const chalk = require('chalk');

// const error = chalk.bold.red;
// const warning = chalk.keyword('orange');

// console.log(error('Error!'));
// console.log(warning('Warning!'));

