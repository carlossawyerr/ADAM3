var request = require("request");
var url = "http://api.shopstyle.com/api/v2/products?pid=uid1201&format=json&fl=r2&fl-b585&limit=50"
var fs = require('fs');

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
      request("http://api.shopstyle.com/api/v2/products?pid=uid1201&format=json&fl=r2&fl-b585&limit=50").pipe(fs.createWriteStream("products.json"));
      request("http://api.shopstyle.com/api/v2/products?pid=uid1201&format=json&fl=r2&fl-b585&limit=50&offset=50").pipe(fs.createWriteStream("products2.json"));
      request("http://api.shopstyle.com/api/v2/products?pid=uid1201&format=json&fl=r2&fl-b585&limit=50&offset=100").pipe(fs.createWriteStream("products3.json"));
    }
})

