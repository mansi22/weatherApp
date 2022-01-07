const { response } = require("express");
const express = require("express");
const https=require("https");
const http=require("http");
const PORT = process.env.PORT || 3001;

const app = express();
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  app.get('/city/:city', function(req, res)  {
   // res.send(req.params);
    console.log(req.params)
    let data=''
    let body={}
    var city=req.params.city;
    var url="http://api.weatherstack.com/current?access_key=1b6fdda898c99d874820e27ed6aa564a&query="+city;
    console.log(url)

    const req1 = http.request(url, (res1) => {
     // console.log(res1.headers)
      
      res1.on('data', (chunk) => {
        data = data + chunk.toString();
      //  console.log(data)
    });
    
    res1.on('end', () => {
       body = JSON.parse(data);
      console.log(body);
      res.send(body)
      console.log("response is",body)
  });
   
})
req1.on('error', (error) => {
  console.log('An error', error);
});

req1.end();

//res.send(data);
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});