var marks = 82;       
var income = 450000;  
var result;

if (marks >= 85 && income < 300000)
{
  result = "Full Scholarship";
}
else if (marks >= 70 && income < 500000)
{
  result = "Half Scholarship";
}
else
{
  result = "Not eligible for scholarship";
}

console.log("Marks:", marks + "%");
console.log("Family Income: ₹" + income);
console.log("Result:", result);
