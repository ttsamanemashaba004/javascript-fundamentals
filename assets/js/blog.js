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
        
    }

    editPost(title, newContent){
        for(let i = 0; i < this.posts.length; i++){
            let n = 0;
            if(this.posts[i].title == title){
                this.posts[i].content = newContent;
                console.log(`Post that is titled "${title} has been updated"`);
                return; // exit
            }
        }
        console.log(`No post found with this title "${title}"`);
    }

    deletePost(title){
        for(let i = 0; i < this.posts.length; i++){
            if(this.posts[i].title === title){
                this.posts.splice(i, 1);
                console.log(`Post titled "${title}" has been deleted.`);
                return; // exit
            }
        }
        console.log(`No post found with this title "${title}"`);
    }

    displayPost(){
        console.log(`Posts by ${this.username}:`);
        this.posts.forEach((post) => {
            post.showPost()
        })
    }

    get getPosts(){
        return this.posts;
    }
}

/**
 * 
 */

class Post{
    constructor(title, content, username){
        this.title = title;
        this.content = content;
        this.username = username;
        this.createdAt = new Date();
    }

    /**
     * Display the post content in a formatter manner
     */

    showPost(){
        console.log(`@${this.username} posted on ${this.createdAt}:`)
        console.log(this.content);
        console.log(`--------------------`) // separator for clarity
    }
}

// Create users
const user1 = new Blog('johnDoe', 'John Doe')
user1.displayPost();
user1.createPost('Java', 'I live Java');
user1.displayPost();
// user1.deletePost('Java')

console.log(user1.getPosts.length);