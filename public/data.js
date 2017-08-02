const ShopStyle = require('shopstyle-sdk');

const shopstyle = new ShopStyle('test');
shopstyle.product(359131344).then(result => console.log(response.name));