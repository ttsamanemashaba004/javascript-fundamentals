class User {

    /**
     * Constructor for creating a new User object
     * @param {string} username - The username of the user
     * @param {string} fullName - The full name of the user
     */
    
    constructor(username, fullName){
        this.username = username;
        this.fullName = fullName;
        this.posts = [];
    }

    /**
     * @param {string} content - The content of the post
     */

    createPost(content){
        const newPost = new Post(this.username, content);
        this.posts.push(newPost);
    }

    /**
     * Display all posts created by the user
     */

    showPost(){
        console.log(`Posts by ${this.username}:`);
        this.posts.forEach((post) => {
            post.displayPost();
        });
    }
}


// Class to represent a Post
class Post {
    /**
     * Constructor for creating a new Post object
     * @param {string} username - The username of the post's creator
     * @param {string} content - The content of the post
     */

    constructor(username, content){
        this.username = username; // store the username of the person who created the post
        this.content = content; // store the content of the post
        this.createdAt = new Date(); // store the current date and time the post was created
    }

    /**
     * Display the post content in a formatter manner
     */

    displayPost(){
        console.log(`@${this.username} posted on ${this.createdAt}:`);
        console.log(this.content);
        console.log('-----------------------'); // separator for clarity
    }
}

// Practical example
// Creating users

const user1 = new User('johnDoe', 'John Doe');
const user2 = new User('janeSmith', 'Jane Smith');

// Users creating posts

user1.createPost('Hello, world! This is my first post on Instagram.');
user2.createPost('Loving this new platform! #excited');

user2.createPost('Hey everyoner! Just trying out this Instagram thing.');
user2.createPost('Had a great day at the beach today!');


// Displaying the posts
user1.showPost();
user2.showPost();