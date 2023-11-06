//factorial 
// the factorial of a number is the product of all the
 //numbers from to that number.
 // for example
 // the formula for the factorial of a number:
 //(n!)=1*2*3*4.....n
 var number = prompt(" Please enter a number");
 var fact=1;
 if(number==0){
    console.log(`the factorial of a ${number} is 1`)
}
    else if(number<0){
        console.log(`the factorial of a -ve numbers is not posible`);

    }
    else{
        for(var i=1; i<=number; i++){
            fact=fact * i;
            
        }
        console.log(fact)
    }
 
