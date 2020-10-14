const isMultipleOf = (divider) => (number) => {
    return number % divider === 0;
}
const isMultipleOfThree = isMultipleOf(3);
const isMultipleOfFive = isMultipleOf(5);
const isMultipleOfThreeAndFive = isMultipleOf(15);

export const convertOneNumberToString = number => {

    if (isMultipleOfThreeAndFive(number)) {
        return 'fizzbuzz'
    } else if (isMultipleOfFive(number)) {
        return 'buzz'
    } else if (isMultipleOfThree(number)) {
        return 'fizz'
    }
    return number.toString()
}

export const convertNumbersToStrings = arrayOfNumbers => {
    return arrayOfNumbers.map(convertOneNumberToString)
}

export const printFizzBuzzString = convertNumbersToStrings => {
    return convertNumbersToStrings.reduce((acc, val) => acc + ' ' + val);
}


