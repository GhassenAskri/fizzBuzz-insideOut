import {convertOneNumberToString,printFizzBuzzString,convertNumbersToStrings} from '../src/fizzbuzz'

describe('numbers that are not multiple ' +
    'of 3 or 5 or both', () => {
    test('When I convert 1 to a string, i get back a string representing' +
        'it', () => {
        expect(convertOneNumberToString(1)).toStrictEqual('1')
    });
    test('When I convert 2 to a string, i get back a string representing' +
        'it', () => {
        expect(convertOneNumberToString(2)).toStrictEqual('2')
    });
    test('When I convert 4 to a string, i get back a string representing' +
        'it', () => {
        expect(convertOneNumberToString(4)).toStrictEqual('4')
    });
});
describe('numbers that are multiple of 3', () => {
    test('When I convert 3 to a string , i get back fizz' +
        'it', () => {
        expect(convertOneNumberToString(3)).toStrictEqual('fizz')
    });
    test('When I convert 6 to a string, i get back a fizz' +
        'it', () => {
        expect(convertOneNumberToString(6)).toStrictEqual('fizz')
    });
    test('When I convert 9 to a string, i get back a fizz' +
        'it', () => {
        expect(convertOneNumberToString(9)).toStrictEqual('fizz')
    });
});

describe('numbers that are multiple of 5', () => {
    test('When I convert 5 to a string, i get back buzz', () => {
        expect(convertOneNumberToString(5)).toStrictEqual('buzz')
    });
});

describe('numbers that are multiple of 3 and 5', () => {
    test('When I convert 15 to a string, i get back fizzbuzz' +
        'it', () => {
        expect(convertOneNumberToString(15)).toStrictEqual('fizzbuzz')
    });

});

describe('array of numbers that contains ' +
    'no multiples of 3 or 5 or of them both'+
    ', multiples of 3 ' +
    ', multiples of 5 ' +
    'and multiples of them both', () => {
    test('When I print a fizzBuzzString from an array equal to [1,2,15,9,10,100], i get back 1 2 fizzbuzz fizz buzz buzz', () => {
        const arrayNumbers = [1,2,15,9,10,100]
        const numbersAsStrings = convertNumbersToStrings(arrayNumbers)

        const fizzBuzzString = printFizzBuzzString(numbersAsStrings)

        expect(fizzBuzzString).toStrictEqual('1 2 fizzbuzz fizz buzz buzz')
    });

});
