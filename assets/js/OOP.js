// Define the book class
class Book {
    // Constructor method to initialize the properties of a new Book obeject

    constructor(title, author){
        this.title = title;
        this.author = author;
    }

    // Method: a function that descirbes an action related to the book
    describe(){
        console.log(`${this.title} is written by ${this.author}`);
    }
}

// Creat an object (instance) of the Book class
const myBook1 = new Book('The Great Adventure', 'Alex Smith')

// Access the properties of the object
console.log(myBook1.title);
console.log(myBook1.author);
myBook1.describe();



// Encapsulation
class Book1 {
    // Constructor method to initialize the properties of a new Book obeject

    constructor(title, author){
        // make it private with _
        this._title = title;
         // make it private with _
        this._author = author;
    }

    // Getter method for title
    getTitle(){
        return this._title;
    }

    // Setter method for the title
    setTitle(newTitle){
        this._title = newTitle;
    }

    // Getter method for the author
    getAuthor(){
        return this._author;
    }

    setAuthor(newAuthor){
        this._author = newAuthor;
    }

    // Method: a function that descirbes an action related to the book
    describe(){
        console.log(`${this._title} is written by ${this._author}`);
    }
}

// Creat an object (instance) of the Book class
const myBook = new Book1('The Great Adventure', 'Alex Smith')

// Access the properties of the object
console.log(myBook.getTitle());
console.log(myBook.getAuthor());
myBook.describe();

myBook.setTitle('The Great Gatsby');
myBook.setAuthor('Tinyiko Tsamane')

console.log(myBook.getTitle());
console.log(myBook.getAuthor());
myBook.describe();