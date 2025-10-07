var temp = 28; 
var msg;

if (temp < 0)
{
  msg = "Freezing Cold";
}
else if (temp <= 15)
{
  msg = "Very Cold";
}
else if (temp <= 25)
{
  msg = "Cold";
}
else if (temp <= 35)
{
  msg = "Warm";
}
else
{
  msg = "Hot";
}

console.log("Temperature:", temp + "°C");
console.log("Category:", msg);
