const file = ()=>{
  let res = unit.unit();
  console.log('res',res)
}



module.exports ={
  file
}




let unit = require('./unit');

console.log('unit in file',unit)

