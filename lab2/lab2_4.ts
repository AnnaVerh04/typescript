// Реализуйте метод, который будет выводить информацию в 
// консоль о создаваемом объекте типа Cat или Dog, применяя
// обобщенный тип, ограниченный типом Pet.
class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
    return "No speak. I am fish!";
    }
}
    class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
    return "Yaw-Gaw!";
    }
}
    class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
    return "Miyau!";
    }
}

function ShowPet<T extends Pet>(pet: T): void {
    console.log(`Name:`, pet.name);
    console.log(`Age:`, pet.age);
    console.log(`Speak:`, pet.speak());
    
    if (pet instanceof Dog) {
        console.log(`Label:`, pet.label);
    }
    console.log('');
}

const myDog = new Dog();
const myCat = new Cat();

ShowPet(myDog); 
ShowPet(myCat); 