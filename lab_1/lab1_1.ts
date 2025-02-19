// Стрелочная функция для вычисления остатка от деления
const remainder = (a: number, b: number): number => {
    return a % b;
};

const num1 = 10;
const num2 = 3;
const result = remainder(num1, num2);

console.log(result);