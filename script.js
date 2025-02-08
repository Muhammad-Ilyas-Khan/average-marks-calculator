var english = document.getElementById("english");
var maths = document.getElementById("maths");
var science = document.getElementById("science");
var computerScience = document.getElementById("computerScience");
var socialScience = document.getElementById("socialScience"); 
var calculateBtn = document.getElementById("calculate");
var result = document.getElementById("result");


calculateBtn.addEventListener("click", function() {
//Get input values and convert to numbers
var englishMarks = parseFloat(english.value);
var mathsMarks = parseFloat(maths.value);
var scienceMarks = parseFloat(science.value);
var computerScienceMarks = parseFloat(computerScience.value);
var socialScienceMarks = parseFloat(socialScience.value);


// Validate inputs

if (isNaN(englishMarks) ||
 isNaN(mathsMarks) || 
 isNaN(scienceMarks) ||
  isNaN(computerScienceMarks) 
  || isNaN(socialScienceMarks)) 
  {
    alert("Please enter valid marks");
    return;
}  
// Calculate total
var total = englishMarks + mathsMarks + scienceMarks + computerScienceMarks + socialScienceMarks;

// Calculate percentage
var averagePercentage = total / 500 * 100;

// Display result
result.textContent = `${averagePercentage.toFixed(2)}%`;

}); 



