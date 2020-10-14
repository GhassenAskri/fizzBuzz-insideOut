export const fizzBuzz = (number) => {
    const multipleOfThree = number % 3 === 0;
    const multipleOfFive = number % 5 === 0;
    const multipleOfThreeAndFive = multipleOfThree && multipleOfFive;


    return multipleOfThreeAndFive ? 'fizzbuzz' :
        (multipleOfThree ? 'fizz' :
                (multipleOfFive ? 'buzz' : number.toString())
        )
}

export const convertNumbersToStrings = (arrayOfNumbers) => {
    return arrayOfNumbers.map(fizzBuzz)
}

export const printStrings = convertNumbersToStrings => {
    return convertNumbersToStrings.reduce((acc, val) => acc + ' ' + val);
}


