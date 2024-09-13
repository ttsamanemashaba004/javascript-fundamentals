class Blog{
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
     * 
     * @param {string} title - The title of the blog post 
     * @param {string} content - The content of the blog post
     */

    createPost(title, content){
        const newPost = new Post(title, content, this.username);
        this.posts.push(newPost);
        console.log(`Post titled "${title}" created by ${this.username}`)
    }

    editPost(){

    }

    deletePost(){

    }

    displayPost(){

    }
}

/**
 * 
 */

class Post{
    constructor(title, content, author){
        this.title = title;
        this.author = author;
        this.author = author;
        this.createdAt = new Date();
    }
}

// Create users
// Users will create posts
// Display posts
// Edit posts
// Delete post