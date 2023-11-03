//without using temprary variables
//a=5 and b=6;
//a=a+b;(5+6)=11
//b=a-b;(11-6)=5
//a=a-b;(11-5)=6
 let a=5;
 let b=6;
 console.log(`before swapping the value of a:${a} and b:${b}`);

 a=a+b;
 b=a-b;
 a=a-b;
 console.log(`after swapping the value of a:${a} and b:${b}`);