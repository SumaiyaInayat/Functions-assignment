                     //FGUNCTIONS
// 1. Write a function that displays current date & time in your
// browser.

// function time(){
//         var a=new Date();
//         alert (a);
// }
// time();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

// var a=prompt("Enter your First Name");
// var b=prompt("Enter your Last Name ");
// function greet(){
//         var c= a+" "+b;
//         alert("Hi! How are you!  "+c)
// }
// greet();

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// var a=+prompt("Enter first number");
// var b=+prompt("Enter Second Number");
// function add(){
//         var c=a+b;
//         alert (c);
// }
// add ();

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// var x=+prompt("Enter a number");
// var y=+prompt("Enter secomd number");
// var z=prompt("Enter Operator");
// function cal(p,q,r){
//         if(r==="*"){
//                 var a=p*q;
//                 return a;
//         }
//         else if(r==="/"){
//                 var b=p/q;
//                 return b;
//         }
//         else if(r==="+"){
//                 var c=p+q;
//                 return c;
//         }
//         else if(r==="-"){
//                 var d=p-q;
//                 return d;
//         }
//         else{
//                 alert("Undefined!")
//         }
// }
// var j=cal(x,y,z);
// alert(x+" "+z+" "+y+" = "+j);

// 5. Write a function that squares its argument

// var x=+prompt("Enter anumber");
// function abc(){
//         var c=x*x;
//         alert (c);
// }
// abc(x);

// 6. Write a function that computes factorial of a number.

// var n=+prompt("Enter your number");
// var ans=n;
// function fact(num){
//         if(num==0|| num==1){
//                 return 1;
//         }
//         else{
//                 for (var i=num-1;i>=1;i--){
//                         ans=ans*i;
//                 }
//                 return(ans)
//         }

// }
// var c=fact(n);
// alert(c);

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

// var x=+prompt("Enter a starting value");
// var y=+prompt("Enter last value");
// function value(p,q){
//         for (var i=p;i<=q;i++){
//          document.write(i+"<br>")
//         }
// }
// value(x,y)

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

// var base=+prompt("Enter base");
// var perpen=+prompt("Enter perpendicular");
// function hyp(b,p){
//     var z=Math.sqrt(b*b+p*p)
//     alert(z)
// }
// hyp(5,10);


// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// var x=+prompt("Enter height");
// var y=+prompt("Enter width");
// function rect(a,b){
//         var z=a*b;
//         alert("The area of rectangle is "+z)
// }
// rect(x,y)

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

//function palindrome(){
//    var word = prompt("Enter a word")
//    var reverse = "";
//    for(var i=word.length-1; i>=0; i--){
//        reverse += word[i]
//    }
    
//    if(reverse==word){
//        document.write("Given word is a palindrome")
//    }
//    else{
//        document.write("Given word is not a palindrome")
//    }
//}
//palindrome();

// /11. Write a JavaScript function that accepts a string as 
//a parameter and converts the first letter of each word of the string in upper case. 
//EXAMPLE STRING : 'the quick brown fox'
//EXPECTED OUTPUT : 'The Quick Brown Fox'

// function str(){
//     var string = prompt("Enter a string")
//     var word = " "
//     var check=" ";
//     for(var i =0 ; i<=string.length-1;i++){
//         if(i ==0){
//             document.write(string[i].toUpperCase())
//             word += string[i]
//         }
//         else if(string[i]==check){
//             document.write(string[i+1].toUpperCase())
            
//         }
//         else{
//             document.write(word[i])
        
//         }                                                                                                                                                                                                                                                                                                                                       

//     }
// }
// str();

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr

// var r=+prompt("Enter radius");
// function calccircumference(a){
//        var x=3.142;
//        var d= 2*x*a;
//        alert("The circumference of a circle is "+d);
// }
// calccircumference(r);
// function calcarea(b){
//         var y=3.142;
//         var c=y*b*b;
//         alert("The area of circle is "+c)
// }
// calcarea(r);