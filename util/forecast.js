const req = require('request')

const forecast=(latitude,longitude,location,cb)=>{
    const url = "http://api.weatherstack.com/current?access_key=c627de678526c81207f083c89e2f52be&query="+latitude+','+longitude;
    
    req({ url, json: true }, (error, { body }) => {
        if (error) {
            cb('Unable to connect to weather service!', undefined)
        }else if (body.error) {
            callback('Unable to find location', undefined)
        }
        else{
            cb(undefined, body.current.weather_descriptions + ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.',`<img src=${body.current.weather_icons[0]}>`)
        }
    })

}

module.exports=forecast
