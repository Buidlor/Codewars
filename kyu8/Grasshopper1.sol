// Grasshopper - Terminal game move function
// Solidity:
// https://www.codewars.com/kata/563a631f7cbbc236cf0000c2
// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15

pragma solidity ^0.4.19;
contract Kata {
  function move(int p, int r) public pure returns (int) {
    // your code here
    return p + 2 * r;
  }
}