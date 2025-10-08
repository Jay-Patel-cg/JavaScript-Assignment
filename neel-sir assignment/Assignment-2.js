        // Q1 - Print All Elements of an Array
var array = [0,1,2,3,4,5,6,7,8,9];
var n = array.length;
for(var i=0; i<n; i++){
    console.log(array[i]);
}

console.log( );

        //Q2 - Find the Sum of All Array Elements

// var array = [0,1,2,3,4,5,6,7,8,9];
var n = array.length;
var sum = 0;
for(var i=0; i<n; i++){
    sum = sum+i;
}
console.log(sum);

console.log( );

        //Q3 - Find the Average of Array Elements

// var array = [0,1,2,3,4,5,6,7,8,9];
var n = array.length;
var sum = 0;
for(var i=0; i<n; i++){
    sum = sum+i;
}
// console.log(sum);
var avg = sum/n;
console.log(avg);

        //Q4 - Find the Largest Number in an Array


var max_array = array[0];
for(var k=0; k<n; k++){
    if(max_array<array[k]){
        max_array = array[k];
    }
}
console.log(max_array);

        //Q4-p2 - Find the Largest and Second Largest Number in an Array

var max_array = array[0];
var max2_array = array[0];
for(var k=0; k<n; k++){
    if(max_array<array[k]){
        max_array = array[k];
    }
for(var l=0; l<n; l++){
    if(array[l]>max2_array && array[l]<max_array){
        max2_array=array[l];
    }
}
}
console.log("1st" , max_array);
console.log("2nd" , max2_array);



        //Q5 - Find the Smallest Number in an Array

var min_array = array[0];
for(var k=0; k<n; k++){
    if(min_array>array[k]){
        min_array = array[k];
    }
}
console.log(min_array);

        //Q6 - Count Even and Odd Numbers

var even = 0;
var odd = 0;
for(var x=0; x<n ; x++){
    if(array[x]%2==0){
        even++;
    }
    else{
        odd++;
    }
}
console.log("The Even In array is = ",even);
console.log("The Even In array is = ",odd);

        //Q7 - Display Array in Reverse Order


var revese_array = [];
for(var z=0; z<n; z++){
    revese_array[z]=array[n-z-1];
}
console.log("Array in Reverse : ", revese_array);

        //Q8 - Count Positive, Negative, and Zero Numbers

var positive = 0;
var negative = 0;
var zero = 0;

for(var j=0; j<n; j++){
    if(array[j]>0){
        positive++;
    }
    else if(array[j]<0){
        negative++;
    }
    else{
        zero++;
    }
}
console.log("The Positive Value : ", positive);
console.log("The negative Value : ", negative);
console.log("The zero Value : ", zero);

        //Q9 - Find Numbers Greater than a Given Value


var limit = 5;
for(var y=0; y<n; y++){
    if(array[y]>limit){
        console.log(array[y]);
    }
}
