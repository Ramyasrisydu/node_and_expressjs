function validateUser(username,password,callback){
    if(password=="1998")
        callback(null, "correct login")
    else
        callback("incorrect user",null)
}
    
validateUser("Yeshh","1998",(err,result) =>{
    if(err)
        console.log(err)
    else
        console.log(result)
})