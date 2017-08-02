const allproducts = require('./products.json');
const allproducts2 = require('./products2.json');
const allproducts3 = require('./products3.json');

var shopstyle = allproducts.products.concat(allproducts2.products).concat(allproducts3.products)

var request = require("request");

var fs = require('fs');

var loop1 = []

for(var i = 0; i < shopstyle.length ; i++){
  brandedName = shopstyle[i].unbrandedName;
  cat = shopstyle[i].categories;
  colors = shopstyle[i].colors;
  brand = shopstyle[i].brand;
  price = shopstyle[i].price;
  description = shopstyle[i].description;
  image = shopstyle[i].image.sizes.Medium.url;

  for(var j =0; j < cat.length; j++){
  category = cat[j].name;
  }

  for(var k =0; k < colors.length; k++){
  color = colors[k].name;
  }

  var re1 = /<\/ul>/gi;
  var re2 = /<\/li>/gi;
  var re3 = /<li>/gi;
  var re4 = /<ul>/gi;

  description = description.replace(re1,'').replace(re2,'').replace(re3,'').replace(re4,'');
  
  loop1.push({
  Name : brandedName,
  Brand : brand,
  Price : price,
  Color : color,
  Description : description,
  Image : image,
  Category : category
  });

}

loop = JSON.stringify(loop1);

fs.writeFile('Macys.json',loop, 'utf8');
console.log(loop1);
