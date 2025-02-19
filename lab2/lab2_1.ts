// Вариант 6. Минимальное положительное число в массиве
const findMinPositive = (arr: number[]): number | null => {
    let minPositive: number | null = null;

    for (const num of arr) {
        if (num > 0) {
            if (minPositive === null || num < minPositive) {
                minPositive = num;
            }
        }
    }

    return minPositive;
};

const numbers = [-10, 0, 5, 3, -2, 7, 1];
const minPositive = findMinPositive(numbers);

console.log(minPositive); // Вывод: 1


//Вариант 6. Матрица булевых значений в соответствии с четностью или нечетностью символов элемента
const convertToBooleanMatrix = (stringMatrix: string[][]): boolean[][] => {
    const booleanMatrix: boolean[][] = [];

    for (const row of stringMatrix) {
        const booleanRow: boolean[] = [];
        
        for (const str of row) {
            booleanRow.push(str.length % 2 !== 0);
        }
        
        booleanMatrix.push(booleanRow);
    }

    return booleanMatrix;
};

const stringMatrix = [
    ["cat", "turtle", "zebra"],
    ["duck", "fish", "pig"],
    ["cow", "moose", "frog"]
];

const booleanMatrix = convertToBooleanMatrix(stringMatrix);

console.log(booleanMatrix);
// Вывод: [ [ true, false, true ], [ false, false, true ], [ true, true, false ] ]