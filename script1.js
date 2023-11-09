// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #




// This statement works 
for (let triangle = '#'; triangle <= '####'; triangle += '#') {
    console.log(triangle);
}


//second section doesn't work, only produces the first line 
for (let triangle2 = '###'; triangle2 < '####'; triangle2 -= '#') {
    console.log(triangle2);   
}




                // class notes, review


// for (expression1, expression2, expression3) {
//     *code block*
// }

// exp1 sets looping variable 
// ex2 looping Condition, has to be true
// ex3 loops between iterations

// for (let i = 1, i < 5, i++) {
//     console.log(i);
// }

// loop1 --> value is 1, outputs 1
// after first loop then it increases 1 by 1
// loop2 --> value is 2, output 2
// loop3 -->value 3,output 3
// loop4 --> value 4, output 4
// at loop5 it doesnt work because it no longer meets the condition 

/*

//code for actual problem 
 based on only 5 rows instead of 7
steps: 
 let output string '#'
1.for loop increase 
--> outputString += "#" (concatnating)
--> value of output String
2. loop 3
3. for loop decrease
4. loop 2 times 
5. substring


let outputString = "#"

for (let x = 1; x < 5; x++) {
    console.log(outputString);
    outputString += "#" . //same as outputString + "#"
}

for (let x=4; x > 1; x--) {  //same as x = x-1
    outputString = outputString.substring(0, x-1); //(index start, index end) cant use negative number because it will throw it out of bounds 
    //parses the string and then outputs it, it removes 1 each time it loops 
    console.log(outputString);
}

// 

"hello world"
H | E| L| L| O| W| O| R| L| D|
0 1 2 3..etc
EACH ONE HAS ITS OWN position int he array 

# | #|
 0  1 ..etc



 */