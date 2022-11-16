// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

//Solidity:
pragma solidity ^0.4.19;
contract Kata {
  function summation(int n) public pure returns (int) {
    // your code here 
    for (int i = 1; i<=n; i++ ){
      int sum = sum + i ;
    }
    return sum;
  }
}