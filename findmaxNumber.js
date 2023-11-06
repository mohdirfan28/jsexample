// //  Using Math.max()
// // . MAth.max() returns the largest number among the provided number.
// //. syntax: Math.max(n1, n2, n3);
//   var a=prompt("pls enter the first number")
//   var b=prompt("pls enter the second  number")
//   var c=prompt("pls enter the third  number")
//  var x=Math.max(a,b,c);
//  console.log(`${a},${b},${c} is largest number=${x}`);

 function check(p,q,r){
    if(p>=q && p >= r){
    return p;
    }
 
 else if(q>=r && q>=r){
    return q;
}
else{
    return r;
}
 }
 var a=prompt("pls enter the first number")
   var b=prompt("pls enter the second  number")
 var c=prompt("pls enter the third  number")
 var x=check(a,b,c);
 console.log(`${a},${b},${c} :Largest number=${x}`);