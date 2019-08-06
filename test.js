let input = "see spot run";
let bigLetters = [];

// Defining my function
function siteLinks(str) {
	
// 	Split string - complete
	var array = str.split(" ");
// 	Capitalize first char of each item in array after split
	
let bigLetters = array.map(word => word.replace(word.charAt(0), word.charAt(0).toUpperCase()));
// 	Rejoin into new string
let finalSentance = bigLetters.join(" ");
	
// Compare results
	console.log(str);						  
	console.log(finalSentance);
	
// 	return result
	return finalSentance;
		}

siteLinks(input);












