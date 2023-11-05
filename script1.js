// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #



// adds 1 

// += 1 or name of variable++

 //subtracts 1

// -= 1 or name of variable---




for (let triangle = '#'; triangle <= '####'; triangle += '#') {
    console.log(triangle);
}

for ( let triangle2 = '####'; triangle2 > '###'; triangle2 -= '#') {
    console.log(triangle2);   //second section doesnt work
}

// does not work

/*let triangle = '#';

if (triangle <= '####') {
    triangle += '#';
} 
else if (triangle >= '####') {
    triangle -= '#';
}
  console.log(triangle); */