function createCounter(): () => number {
    let count = 0;

    return function() {
        return ++count;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); 
console.log(counter1()); 
console.log(counter2()); 
console.log(counter2()); 