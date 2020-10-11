export const fizzBuzz = (number) => {

    const fizzbuzz = number % 5 === 0 && number % 3 === 0;
    const fizz = number % 3 == 0;
    const buzz = number % 5 == 0;

    return fizzbuzz ? 'fizzbuzz' :
        (fizz ? 'fizz' :
                (buzz ? 'buzz' : number.toString())
        )
}

export const calculateFizzBuzz = (arrayNumbers) => {
    return arrayNumbers
        .map(fizzBuzz)
        .reduce((acc, val) => acc + ' ' + val);
}


