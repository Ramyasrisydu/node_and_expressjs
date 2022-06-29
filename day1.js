var fs=require('fs')
fs.readFile("./jsontext.txt", function(err,data){
    if(err)
        console.log("Invalid data")
    else
        ob = JSON.parse(data.toString())
    console.log(ob)
    for(ele in ob)
    console.log(ele+":"+ob[ele])
})