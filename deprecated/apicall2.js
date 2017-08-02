var request = require("request")

var url = "http://api.shopstyle.com/api/v2/products?pid=uid1201&format=json&fl=r2&fl-b585&limit=2"

var dataretrieved = request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
    }
})

var Stringed = JSON.stringify([dataretrieved[description]);


