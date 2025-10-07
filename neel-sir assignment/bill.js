var units = 350; 
var bill;

if (units <= 100) 
{
    bill = units * 5;
}
else if (units <= 300) 
{
    bill = (100 * 5) + ((units - 100) * 7);
}
else 
{
    bill = (100 * 5) + (200 * 7) + ((units - 300) * 10);
}

console.log("Units:", units);
console.log("Total Bill: ₹" + bill);