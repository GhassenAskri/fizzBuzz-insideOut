Write a method that takes as parameter an array of integers that returns a string.
This string must contain a sequence of numbers from 1 to n.

Constraints:
For numbers that are not multiples of 3 or 5 or both 3 and 5, the number must be replaced by it's equivalent as string.
For multiples of 3, the numbers must be replaced by "Fizz".
For multiples of 5, the numbers must be replaced by "Buzz".
For multiples of 3 and 5, the number must be replaced by "FizzBuzz".

Example:
Given an array of numbers  : [1,2,15,9,10,100].
Then the output : "1 2 fizzbuzz fizz buzz buzz".

Method:
In this kata w will choose the inside out approach (chicago school).
Write this kata with TDD starting with the calculations on the multiples.
Then enrich it with a sequence of numbers.

First, write a test block for numbers that are neither divisible by 3 nor divisible by 5.
Second, write a test block for numbers that are divisible by 5.
Third, write a test block for numbers that are divisible by 3 and 5.
Fourth, write a test block for array of numbers to return a string that treats all the constraints.


