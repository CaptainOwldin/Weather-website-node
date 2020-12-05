const  request = require('postman-request')


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2ad55cc485fb95f3567ebcd237386275&query=' + latitude + ',' + longitude
    
    request({url, json: true}, (error, { body}) => {
        if(error) {
            callback('Unable to connect to weather services', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out!' + ' There is a ' + body.current.precip + '% chance of rain.') 

        }
    })
}

 module.exports = forecast