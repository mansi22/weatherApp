const { response } = require("express");
const express = require("express");
const https=require('https')
const PORT = process.env.PORT || 3001;

const app = express();
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  app.get('/city/:city', function(req, res)  {
    res.send(req.params);
    console.log(req.params)
    var city=req.params.city;
    var url="http://api.weatherstack.com/current?access_key=1b6fdda898c99d874820e27ed6aa564a&query="+city;
/* https request to the above url to be made */
   
    
  });
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});