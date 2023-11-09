// 3. Write code that creates an 8x8 grid, similar to a chessboard, using alternating spaces and the pound/hashtag symbol (#).


// Hint: There are two distinct alternating patterns here…
// Example Output:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #


let pattern1 = "# # # # ";
let pattern2 = " # # # # ";

for (let i = 1; i <= 8; i++) {
    if (1 % 2  == 0) {
        console.log(pattern1)
    } else {
        console.log(pattern2)
    }
};







                            // class notes, review


/*
correct answer 


let pattern1= "# # # # "
let pattern2 =" # # # # "

for (let i = 1; i <= 8; i++) {
    if (1 %2  == 0) {
        console.log(patter1)
    } else {
        console.log(pattern2)
    }
}

*/