var s1=92; s2=82; s3=72; s4=62; s5=52;
var total = s1 + s2 + s3 + s4 + s5;
var per = (total / 500) * 100;
var grade;

if(per >=90)
{
    console.log(grade = "A");
}
else if(per <=90)
{
    console.log(grade = "B");
}
else if(per <=80)
{
    console.log(grade = "C");
}
else if(per <=70)
{
    console.log(grade = "D");
}
else if(per <=60)
{
    console.log("Fail");
}

console.log("Total:", total);
console.log("Percentage:", per.toFixed(2) + "%");
console.log("Grade:", grade);
