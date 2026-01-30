import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// stored data for posts
const posts = [{
    id: 1,
    image: '📱',
    author: 'Sarrah Johnson',
    title: 'Getting Started with Web Development',
    content: 'Learn the fundamentals of web development and start your journey as adeveloper.Well cover HTML, CSS, and JavaScript basics to get you started.'
}, {
    id: 2,
    image: '🚀',
    author: 'Mike Chen',
    title: 'Advanced javascript Technologies',
    content: 'Explore advanced JavaScript concepts including closures, prototypes, andasync/ await.Perfect for developers looking to level up their skills.'
}, {
    id: 3,
    image: '🎨',
    author: 'Emma Davis',
    title: 'UI design principles for modern Apps',
    content: 'Master the art of creating beautiful and functional user interfaces.Learn about spacing, typography, colors, and user experience best practices.'
}, {
    if: 4,
    image: '💻',
    author: 'James Wilson',
    title: 'Building Scalable Backend Systems',
    content: 'Discover the architecture and patterns needed to build backend systems that can scale. Learn about databases, APIs, and best practices for production code.'
}, {
    id: 5,
    image: '🔒',
    author: 'Lisa Anderson',
    title: 'Web Security Essentials',
    content: 'Protect your applications from common vulnerabilities. Learn about HTTPS, authentication, SQL injection, XSS, and other security best practices.'
}, {
    id: 6,
    image: '⚡',
    author: 'Alex Turner',
    title: 'Performance Optimization Tips',
    content: 'Make your web applications lightning fast. Learn about code splitting, lazy loading, caching strategies, and tools to measure and improve performance.'
},
];

let postId = 6;

app.get("/posts", (req, res) => {
    res.json(posts);
});

app.post("/posts", (req, res) => {
    const id = parseInt(postId)
    // get form data
    const newPost = {
        id: ++id,
        image: req.body['image'],
        author: req.body['author'],
        title: req.body['title'],
        content: req.body['content'],
    }

    // check if all fields are filled
    if (newPost.image && newPost.author && newPost.title && newPost.content) {
        posts.push(newPost);
        console.log('post created successfully');
        console.log(req.body);
        res.redirect("/posts");
    } else {
        res
        .send("All fields are required!")
        .status(500)
        .json({message: "fill all fields"})
    }
});

// patch post
app.patch("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const postIndex = posts.find((post) => post.id === id);
    if(postIndex){
        const newPost = {
            image: req.body['image'] || postIndex.image,
            author: req.body['author'] || postIndex.author,
            title: req.body['title'] || postIndex.title,
            content: req.body['content'] || postIndex.content,
        }

        res.redirect('/')
    } else{
        res.status(500)
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
});