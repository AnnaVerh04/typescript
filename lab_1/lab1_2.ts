const pi: number = 3.14;
console.log(pi, typeof pi);

const greeting: string = "Hello, World!";
console.log(greeting, typeof greeting);

const fruits: string[] = ["Яблоко", "Банан", "Груша"];
console.log(fruits, typeof fruits);

const address: {city: string; num: number} = { 
    city: "Самара", 
    num: 101000 
};
console.log(address, typeof address);

let empty: null = null; 
console.log(empty, typeof empty);

let tuple: [string, number] = ["Cat", 5];
console.log(tuple, typeof tuple);