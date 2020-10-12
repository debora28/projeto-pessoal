//ROTA INICIAL

module.exports = function(mocai){

 
    mocai.get('/', function (req, res) { //ROTA INICIAL
      res.render('index');  
    });
  
    
  };
  