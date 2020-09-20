var faker = require('faker');
var i;
for( i=0; i<10; i++ ){
  console.log(faker.name.findName() + "- $" + faker.commerce.price());
}
 
