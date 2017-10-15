var db = require('./DB');


//查询所有
db.saveSubject(arr).then(function(data){
  console.log(data);
}).catch(function(error){
  console.log("报错了 ！"+error);
});