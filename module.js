
// var url = 'https://jsonplaceholder.typicode.com/todos/1'
// nd.get(url,(error,response, body)=>{
//     if(error)
//         console.log(error)
//     console.log(response.statusCode)
//     console.log(body)
// })

//  var url ="https://api.themoviedb.org/3/movie/top_rated?api_key=c39c46ae5a5977661ff84ec5f1633ac2&language=en-US&page=1"
//  nd.get(url, (error, response, body)=>{
//      if(error)
//          console.log(error)
//      else{
//          var results=body.results
//          for(ele in results)
//             console.log(results[ele].title)
//      }
//  })

//  var url ="https://api.mapbox.com/geocoding/v5/mapbox.places/San%20Francisco.json?access_token=pk.eyJ1IjoieWVzYXN3aW5pIiwiYSI6ImNsM28wcDJvNDBpb2YzYm9lODB2NjI2a3kifQ.S4M9cRJlAUP3bJEnJ5Kiqw"
//  nd.get(url, (error, response, body)=>{
//      if(error)
//          console.log(error)
//      else{
//           var results=body.results
//           for(ele in results)
//               console.log(results[ele].city)
//          console.log(JSON.parse(body))
//      }
// })

// var url ="http://api.weatherstack.com/current?access_key=fe7b519da41639a4a4ba490e61457846&query='New York'"
// nd.get(url, (error, response, body)=>{
//     if(error)
//         console.log(error)
//     else{
//         // var results=body.results
//         // for(ele in results)
//         //     console.log(results[ele].city)
//         console.log(body)
//     }
// })

// var url ="http://api.weatherstack.com/current?access_key=fe7b519da41639a4a4ba490e61457846&query='Ongole'"
// nd.get(url, (error, response, body)=>{
//     if(error)
//         console.log(error)
//     else{
//         // var results=body.results
//         // for(ele in results)
//         //     console.log(results[ele].city)
//         console.log(body.current.temperature)
//         console.log(body.location.lat)
//         console.log(body.location.lon)
//         var desc=body.current.weather_descriptions
//         for(ele in desc)
//             console.log(desc[ele])
//     }
// })
var nd=require("needle")
for(var i=1;i<499;i++){
var url ="https://api.themoviedb.org/3/movie/top_rated?api_key=c39c46ae5a5977661ff84ec5f1633ac2&language=en-US&page="+i
 nd.get(url,(error,response,body)=>{
     if(error)
         console.log(error)
     else{
         var results=body.results
         for(ele in results){
            if(results[ele].original_language=="te")
                console.log(results[ele].title)
         }
      }
   })
}
