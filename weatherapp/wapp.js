// Include ./utils/geoloc
//Include ./utils/weatherinfo
var geoloc = require("./utils/geoloc")
var weatherinfo = require("./utils/weatherinfo")


geoloc.geoloc("Bhimavaram",function(error,locjson){
    if(error){
        console.log(error)
    }
    else{
        console.log("America longitude:"+locjson.Longitude+" latitude:"+locjson.Latitude) 
    }
})

weatherinfo.getWeatherInfo("America",function(error,temperatureinfo){
            if(error){
                console.log(error)
            }
            else{
                console.log("Current Temperature in Bhimavaram:"+temperatureinfo)
            }
        
})



