//Created an empty object. 
var treeOb = {}
//create a var for the submit button
var growBTN =document.getElementById("grow");
//Created a single function with two conditions. 
function runInput() {
	//Defined object key values with input from DOM.
	treeOb.height=document.getElementById("inputH").value; 
	treeOb.char=document.getElementById("inputC").value;
	//created check for input--one or no fields filled will trigger alert.
 	if (treeOb.height === "" || treeOb.char === "") {
 		alert("Both input fields need a value, jerk.");
 		//If fields filled:
	} else {
		var space = ' '//This will be used to create tree padding.
		for (var i = 0; i < treeOb.height; i++) { 
			var spaceMath = treeOb.height - i; //tree
			var hardMath = 2 * i + 1; //the first line is 1, you want the next line to be 3 (2x1+1), and so on.
			console.log(space.repeat(spaceMath) + treeOb.char.repeat(hardMath)); //spaces repeating plus chars repeating
			}
		}
		/*return false; /* Initially, I used a form with 'onSubmit' to forego using event listeners. 
		By default,"onSubmit" returns a value of true, submits
		the form, and resets the page/console. This initially kept me from displaying my tree. 
		To prevent this, I set my function to return false. */
	}
//Add event listeners for mouseclick and enter. 
growBTN.addEventListener("click", runInput); 
document.getElementById("inputH").addEventListener("keydown", function(btn) {
	if (btn.keyCode == 13) {
		runInput(); 
	}
});
document.getElementById("inputC").addEventListener("keydown",
function(btn2) {
	if (btn2.keyCode == 13) {
		runInput(); 
	}
});





