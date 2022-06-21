const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

// specifies what happens when the user goes to the bmicalculator page (send html page)
app.get("/", function(req, res){
  res.sendFile(__dirname + "/bmicalculator.html");
});

//specifies what happens when someone posts to this route.
app.post("/", function(req, res){

  //req.body.weight and req.body.weight comes from the html input.
  //parseFloat specifies decimal number
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var result = weight/(height*height);

  //send back response
  res.send("The result of the calculation is " + result);
});

app.listen(3000, function(){
  console.log("Server is running on port 3000.")
});
