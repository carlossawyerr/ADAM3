const ShopStyle = require('shopstyle-sdk');
 
const shopstyle = new ShopStyle('test');

var everything = shopstyle.product(359131344).then(response => return response.description);

console.log(everything);
