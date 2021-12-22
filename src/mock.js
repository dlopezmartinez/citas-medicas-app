const express = require('express');
var cors = require('cors');

const app = express();

app.use(express.json())    // <==== parse request body as JSON


const allowedOrigins = ['http://localhost:8080'];
app.use(cors({
    origin: function(origin, callback){
      if(!origin) return callback(null, true);
      if(allowedOrigins.indexOf(origin) === -1){
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  
  }));

app.post('/api/login', function (req, res) {
    if(req.body.username == "carla"){
        res.statusCode = 200;
        res.json({ username: 'carla', token: 'testtoken'});
    }
    else {
        res.statusCode = 400;
        res.send();
    }
});


app.get('/api/product', function (req, res) {
    res.json([{ id: '1', name: 'cuenta', saldo: 12.45}, { id: '2', name: 'tarjeta', saldo: 50.45}]);
    res.send();
    
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
