let number =prompt(`enter the number`);
let temp=number;
let sum=0;
while(temp>0){
//console.log(number);
var digit=temp%10;
//console.log(digit);
sum=sum+digit**3;
//////console.log(sum);
temp=parseInt(temp/10);
//console.log(temp);
//console.log('----');
}
if(sum==number){
    console.log(`${number} is a armstrong number`);
}
else{
    console.log(`${number} is a no an not armstrong number`);
}