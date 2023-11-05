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



for (let triangle2 = '###'; triangle2 <= '####'; triangle2 -= '#') {
    console.log(triangle2);   //second section doesn't work
}



