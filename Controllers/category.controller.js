const db = require('../DB');
console.log('User Controller');
module.exports.GetCategory = function (req, res) {
  try {
    var sql = "call GetCategories()";
    db.query(sql, function (err, result) {
      if (err) {
        res.status(400).send('Failure Hogya Bawa');

      }
      else {
        res.status(200).json(result[0]);
      }
    })
  }
  catch (e) {
    res.status(400).send('Failure');
  }
}

module.exports.GetCategoryById=(req,res)=>{
    try{
      
        let categoryID = req.params.id;
        console.log('Params',req.params);
        var sql = `call GetCategoryById(${categoryID})`;
        db.query(sql,(err, result) =>{
          if (err) {
              console.log(err);
            res.status(400).send('Failure Hogya Bawa');
          }
          else {
              console.log(result);
            res.status(200).json(result[0][0]);
          }
        })
    }
    catch(e){
        res.send(400).send('Error');
    }
}


module.exports.AddCategory=(req,res)=>{
    try{
        console.log(req.body);
        let categoryName = req.body.categoryName;
        console.log(categoryName);
        let userId = req.body.userId;
        var sql = `call AddCategory('${categoryName}',${userId})`;
        db.query(sql,(err, result) =>{
          if (err) {
              console.log(err);
            res.status(400).send('Failure Hogya Bawa');
          }
          else {
              console.log(result);
            res.status(200).json(result[0][0]);
          }
        })
    }
    catch(e){
        res.send(400).send('Error');
    }
}

module.exports.EditCategory=(req,res)=>{
    try{
        console.log(req.body);
        let categoryId = req.body.categoryId;
        let categortyName = req.body.categortyName;
        let reason =null;
        let updatedBy=1;
        console.log(categoryName);
        let userId = req.body.userId;
        var sql = `call EditCategory(${categoryId},'${categortyName},'${reason}',${updatedBy})`;
        db.query(sql,(err, result) =>{
          if (err) {
              console.log(err);
            res.status(400).send('Failure Hogya Bawa');
          }
          else {
              console.log(result);
            res.status(200).json(result[0][0]);
          }
        })
    }
    catch(e){
        res.send(400).send('Error');
    }
}

