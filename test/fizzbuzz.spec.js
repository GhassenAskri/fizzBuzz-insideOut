import {convertOneNumberToString,printFizzBuzzString,convertNumbersToStrings} from '../src/fizzbuzz'

describe('numbers that are not multiple ' +
    'of 3 or 5 or both', () => {
    test('When I fizzbuzz 1, i get back a string representing' +
        'it', () => {
        expect(convertOneNumberToString(1)).toStrictEqual('1')
    });
    test('When I fizzbuzz 2, i get back a string representing' +
        'it', () => {
        expect(convertOneNumberToString(2)).toStrictEqual('2')
    });
    test('When I fizzbuzz 4, i get back a string representing' +
        'it', () => {
        expect(convertOneNumberToString(4)).toStrictEqual('4')
    });
});
describe('numbers that are multiple of 3', () => {
    test('When I fizzbuzz 3, i get back fizz' +
        'it', () => {
        expect(convertOneNumberToString(3)).toStrictEqual('fizz')
    });
    test('When I fizzbuzz 6, i get back a fizz' +
        'it', () => {
        expect(convertOneNumberToString(6)).toStrictEqual('fizz')
    });
    test('When I fizzbuzz 9, i get back a fizz' +
        'it', () => {
        expect(convertOneNumberToString(9)).toStrictEqual('fizz')
    });
});

describe('numbers that are multiple of 5', () => {
    test('When I fizzbuzz 5, i get back buzz', () => {
        expect(convertOneNumberToString(5)).toStrictEqual('buzz')
    });
});

describe('numbers that are multiple of 3 and 5', () => {
    test('When I fizzbuzz 15, i get back fizzbuzz' +
        'it', () => {
        expect(convertOneNumberToString(15)).toStrictEqual('fizzbuzz')
    });

});

describe('array of numbers that contains ' +
    'no multiples of 3 or 5 or of them both'+
    ', multiples of 3 ' +
    ', multiples of 5 ' +
    'and multiples of them both', () => {
    test('When I calculate fizzbuzz for [1,2,15,9,10,100], i get back 1 2 fizzbuzz fizz buzz buzz', () => {
        const arrayNumbers = [1,2,15,9,10,100]
        const numbersAsStrings = convertNumbersToStrings(arrayNumbers)

        const fizzBuzzString = printFizzBuzzString(numbersAsStrings)

        expect(fizzBuzzString).toStrictEqual('1 2 fizzbuzz fizz buzz buzz')
    });

});
