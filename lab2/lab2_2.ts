// Метод, возвращающий истину, если сумма цифр обоих чисел совпадает
type NumberTuple = [number, number];

const sumOfDigits = (num: number): number => {
    let sum = 0;
    let n = Math.abs(num); 

    while (n > 0) {
        sum += n % 10; 
        n = Math.floor(n / 10); 
    }

    return sum;
};

const areDigitSumsEqual = (tuple: NumberTuple): boolean => {
    return sumOfDigits(tuple[0]) === sumOfDigits(tuple[1]);
};

const myTuple: NumberTuple = [123, 321]; 
const res: boolean = areDigitSumsEqual(myTuple);

console.log(res); // Вывод: true
