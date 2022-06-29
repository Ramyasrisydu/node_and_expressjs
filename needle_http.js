// var nd = require("needle")
// var url = "https://jsonplaceholder.typicode.com/todos/1"
// nd.get(url, (err, respone, body) => {
//     if(err)
//         console.log(err)
//     else
//         var results = body.results
//         for(ele in results){
//             console.log(results[ele].title)
//         }
// })

//495d56f80359886f0588995fd8d63287

// var nd = require("needle")
// var url = "https://api.mapbox.com/geocoding/v5/mapbox.places/bhimavaram.json?&access_token=pk.eyJ1IjoicmFteWEtc3lkdSIsImEiOiJjbDNvMW00eGgwOG01M2NwanNubDRyNmx2In0.pGBla-OBYlDBY3MUWiL94g"
// nd.get(url, (err, respone, body) => {
//     if(err)
//         console.log(err)
//     else
//         console.log(body)
// })



    var nd = require("needle");
    var url = "http://api.weatherstack.com/current?access_key=b26cfcca97e47d535207928e88e9201b&query=bhimavaram";
    nd.get(url, (err, respone, body) => {
        if(err)
            console.log(err)
        else
            console.log(body.current.temperature)    
            //console.log(body)
    })
  
