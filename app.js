const express       = require("express"),
      app           = express(),
	  bodyParser    = require("body-parser"),
      mongoose      = require("mongoose");

let output = "output";

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// Redirect

app.get("/", (req, res) => {
	res.redirect("/landing");
});
	

// Menu with options: Use app // instructions
app.get("/landing", (req, res) => {
	res.render("landing");
});


// App running page w/ input. End users would copy string in and it would be converted and automatically be displayed // option to copy to clip board or auto copy?
app.get("/capi", (req, res) => {
	// let string = req.body.input;
	
	res.render("capi", {output: "output"});
});


app.post("/capi", (req, res) => {
	let userInput = req.body.input;	
	let transform = function siteLinks(str) {
// 	Split string - complete
	let array = str.split(" ");
// 	Capitalize first char of each item in array after split	
let bigLetters = array.map(word => word.replace(word.charAt(0), word.charAt(0).toUpperCase()));
// 	Rejoin into new string
let finalSentance = bigLetters.join(" ");
// 	return result
		console.log(finalSentance);
	res.render("capi", {output: finalSentance});
		}

	transform(userInput);
	
});




app.listen(3000, function() {
	console.log("CAPI App is ready to transform!!!");
});
