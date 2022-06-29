function verifylogin(user,pwd,callback){
     if(pwd=="pwd1")
         callback(null, "correct login")
     else
         callback("incorrect user",null)
 }

 verifylogin("user1","pwd1",(err,result) =>{
     if(err)
         console.log(err)
     else
         console.log(result)
 })

 console.log("program is starting")
 setTimeout(() => {
     console.log("Inside timeout")
 }, 3000);
 console.log("after this time")
 console.log("Program ending")

