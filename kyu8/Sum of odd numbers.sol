// Sum of odd numbers
// Solidity:
// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8
pragma solidity ^0.4.19;
contract Kata {
  function rowSumOddNumbers(int n) public pure returns (int) {
    
    int num = n*(n-1) + 1;
          
    for ( int i = 0; i < n; i++){
       int sum = sum + num;
       num = num+2;
    }
    return sum;
  }
}