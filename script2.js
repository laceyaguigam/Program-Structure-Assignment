// 2. Write code that prints all of the numbers from 1 to 100 with three exceptions: 
// [1] For numbers that are divisible by 3, print “Fizz” instead of the number,  
// [2] for numbers that are divisible by 5, print “Buzz” instead of the number, and 
// [3] for numbers that are divisible by both 3 and 5, print “FizzBuzz” instead of the number.

// Example output:
// 1
// 2
// Fizz
// 4
// Buzz
// ...
// 14
// FizzBuzz
// ...



//works, however does not produce 'fizzbuzz'

for (let i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    }
    else if (i % 3 == 0) {
        console.log('Fizz');
    }
    else if (i % 5 == 0) {
        console.log('Buzz');
    }
    else {
        console.log(i);
    }
}

//fizzbuzz needs to go first because they overlap (order matters, it stops after the first one is executed and then it does not get the the condition where it will be both 3 and 5)


// class notes, review


/* 

if (condition1) {

} else if (condition2) {

} else {

}


steps:
1. for loop increase
2. loop 100 times 
3. needs to be divisible by 3, 5, and both 3 and 5, if not then output the number













correct answer below

for (let i = 1; i < 101; i++) { (this could also be let x= 1; i <= 100; i++)
    
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    }
    else if (i % 5 == 0) {
        console.log('Buzz');
    }
    else if (i % 3 == 0) {
        console.log('Fizz');
    }
    else {
        console.log(i);
    }
}
 //doesnt matter if 3 or 5 goes first in the order 
 
 
 
 
 
 
 
 
 
 
 */