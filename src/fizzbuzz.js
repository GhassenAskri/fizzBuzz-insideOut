const isDivisibleBy = (divider) => (number) => {
    return number % divider === 0;
}
const isDivisibleByThree = isDivisibleBy(3);
const isDivisibleByFive = isDivisibleBy(5);
const isDivisibleByThreeAndFive = isDivisibleBy(15);

export const fizzBuzz = (number) => {
    return isDivisibleByThreeAndFive(number) ? 'fizzbuzz' :
        (isDivisibleByThree(number) ? 'fizz' :
                (isDivisibleByFive(number) ? 'buzz' : number.toString())
        )
}

export const convertNumbersToStrings = (arrayOfNumbers) => {
    return arrayOfNumbers.map(fizzBuzz)
}

export const printStrings = convertNumbersToStrings => {
    return convertNumbersToStrings.reduce((acc, val) => acc + ' ' + val);
}


