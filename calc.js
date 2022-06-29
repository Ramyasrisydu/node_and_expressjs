// //---USER DEFINED FUNCTIONS---

// exports.add=function(a,b){
//     return a+b
// }
// exports.sub=function(a,b){
//     return a-b
// }
// exports.mul=function(a,b){
//     return a*b
// }


// //if any js file consists exports function, dont run that file
exports.div=function(a,b,callback){
    if(b==0)
        callback("Error!Division by zero",null)
    else
        callback(null,a/b)
}