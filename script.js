
// 1-
// var x = prompt("enter the num")
// if (x %  3 ==0 && x % 4 ==0) {
//     console.log("yes");
// }else{
//     console.log("no");
// }

// 2-
//  var x = prompt("enter num1")
//  var y = prompt("enter num2")

//  if( x > y ){
//     console.log(x);
//  } else{
//     console.log(y);
//  }

// 3-

// var x = prompt("enter num1")


// if( x < 0  ){
//    console.log("negative");
// } else{
//     console.log("positive");
// }

// 4-

// var x = prompt(" num1")
// var y = prompt("num2 ")
// var z = prompt(" num3 ")
// if (x > y && x > z) {
//     console.log("max num" + x ,"min num" + z );
    
// }else if(x > z && z > y){
//     console.log("max num" + x );
//     console.log("min num" + y); 
// } else if (y > x && x > z){
//     console.log("max num" + y );
//     console.log("min num" + z);
// } else if(y > z && z > x){
//     console.log("max num" + y );
//     console.log("min num" + x);
// } 
//  else if(z > x && x > y){
//     console.log("max num" + z );
//     console.log("min num" + y);
// }else if(z > y && y > x){
//     console.log("max num" + z );
//     console.log("min num" + x);
// }


// 5-
// var x = prompt ("enter the num")

// if (x % 2 == 0) {
//     console.log('even');
// } else {
//     console.log('odd');
// }
// 6-
// var x = prompt("enter a word")

// if (x[0] == "a" || x[0] =="e" || x[0] =="i" || x[0] =="o" || x[0] =="u" ) {
//     console.log("vowel" );
// }else{
//     console.log("consonant" );
// }
// 7-
// var x = prompt(" num")

// for(i =1; i <= x; i++){
//     console.log(i);
// }
// 8-
// var x = prompt("please enter a number ") 

// for (i = 1 ; i <=12 ; i ++ ){
//     console.log( x + '*' + i +"=" +(x*i))
// }

// 9-
// var x = prompt("please enter a number ") 
// for (i = 2 ; i < x  ; i+=2 ){
//     console.log(i);
// }

// 10-
// var x = prompt ("num1")
// var y = prompt ("num2")
// console.log(x**y);

// 11-
//  var x = +prompt("enter your mark1")
//  var y = +prompt("enter your mark2")
//  var z = +prompt("enter your mark3")
//  var v = +prompt("enter your mark4")
//  var n = +prompt("enter your mark5")

//  console.log(x + y + z + v + n);
//  console.log((x + y + z + v + n) / 5);
//  console.log((x + y + z + v + n)/ 500 *100);

// 12-
// var x = prompt ("enter number of month ")

// if(x == 1){
//     console.log(31 + "days" );
// } else if  (x == 2) {
//     console.log("29 days or 28 days" );
// }else if  (x == 3) {
//     console.log(31 + "days" );
// }else if (x == 4) {
//     console.log(30 + "days" );
// }else if (x == 5) {
//     console.log(31 + "days" );
// }else if (x == 6) {
//     console.log(30 + "days" );
// }else if (x == 7) {
//     console.log(31 + "days" );
// }else if (x == 8) {
//     console.log(31 + "days" );
// }else if (x == 9) {
//     console.log(30 + "days" );
// }else if (x == 10) {
//     console.log(31 + "days" );
// }else if (x == 11) {
//     console.log(30 + "days" );
// }else if (x == 12) {
//     console.log(31 + "days" );
// }

// 13-
var x = +prompt("enter your mark in Physics")
 var y = +prompt("enter your mark in Chemistry ")
 var z = +prompt("enter your mark in Biology")
 var v = +prompt("enter your mark in Mathmatics")
 var n = +prompt("enter your mark in Computer")

 if(((x + y + z + v + n)/500 *100) >= 90  ){
    console.log( (x + y + z + v + n)/500 *100 + "%" + ": Grad A");
 }else if(((x + y + z + v + n)/500 *100) >= 80 && ((x + y + z + v + n)/500 *100)<90 ){   
    console.log( (x + y + z + v + n)/500 *100 + "%" +  ": Grad B");
 }else if(((x + y + z + v + n)/500 *100) >= 70 && ((x + y + z + v + n)/500 *100) < 80 ){
    console.log( (x + y + z + v + n)/500 *100 + "%" +  " : Grad C");
 }else if(((x + y + z + v + n)/500 *100) >= 60 && ((x + y + z + v + n)/500 *100)< 70 ){
    console.log( (x + y + z + v + n)/500 *100 + "%" +  ": Grad D");
 }else if(((x + y + z + v + n)/500 *100) >= 50 && ((x + y + z + v + n)/500 *100)< 60 ){
    console.log( (x + y + z + v + n)/500 *100 + "%" +  " : Grad E");
 }else if(((x + y + z + v + n)/500 *100) <= 40 ){
    console.log( (x + y + z + v + n)/500 *100 +  "%" + " : Grad F");
 }


