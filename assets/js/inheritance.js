// Define the Animal class (base class)

class Animal {

    //Constructor method to initialize the properties of a new Animal object
    constructor(name){
        this.name = name; // Property: the name of the aniaml
    }
    
    //Method : a function that describes an action related to the animal;
    speak(){
        console.log(`${this.name} makes a sound`);
    }
}

// Define the Dog class (derived class) that inherits from Animal!
class Dog extends Animal {
    //Constructor method to initialize the properties of a new Dog object
    constructor(name, breed){
        //Call the parent class's constructor using 'super'
        super(name);
        this.breed = breed; // Additional property specific to Dog
    }

    // Method: overrides the speak method from the Animal class
    speak(){
        console.log(`${this.name} barks.`);
    }
}

// Create an object (instance) of the Dog class
const myDog = new Dog('Buddy', 'Golden Retriever');

// Access the properties of the object
console.log(myDog.name); // Output: Buudy
console.log(myDog.breed); // Output: Golden Retriever

// Call the method of the object
myDog.speak(); // Output: Buddy barks.