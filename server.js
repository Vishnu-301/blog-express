import express from "express"
import path from "path"
import { title } from "process";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/posts", (req, res) => {
    const allposts = posts;
    res.render("posts", { allposts });
});

app.get("/create", (req, res) => {
    res.render("create");
});

app.post("/createpost", (req, res) => {
    // Handle subscription logic here
    res.rednder("create");
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
});

/**
 
 */

const posts = [{
    image: '📱',
    author: 'Sarrah Johnson',
    title: 'Getting Started with Web Development',
    excerpt: 'Learn the fundamentals of web development and start your journey as adeveloper.Well cover HTML, CSS, and JavaScript basics to get you started.',
    tags: ['web dev', 'tutorial'],
}, {
    image: '🚀',
    author: 'Mike Chen',
    title: 'Advanced javascript Technologies',
    excerpt: 'Explore advanced JavaScript concepts including closures, prototypes, andasync/ await.Perfect for developers looking to level up their skills.',
    tags: ['web dev', 'tutorial'],
}, {
    image: '🎨',
    author: 'Emma Davis',
    title: 'UI design principles for modern Apps',
    excerpt: 'Master the art of creating beautiful and functional user interfaces.Learn about spacing, typography, colors, and user experience best practices.',
    tags: ['Design', 'Ui/UX'],
}, {
    image: '💻',
    author: 'James Wilson',
    title: 'Building Scalable Backend Systems',
    excerpt: 'Discover the architecture and patterns needed to build backend systems that can scale. Learn about databases, APIs, and best practices for production code.',
    tags: ['Backend', 'Architecture'],
}, {
    image: '🔒',
    author: 'Lisa Anderson',
    title: 'Web Security Essentials',
    excerpt: 'Protect your applications from common vulnerabilities. Learn about HTTPS, authentication, SQL injection, XSS, and other security best practices.',
    tags: ['Security', 'Best Practices'],
}, {
    image: '⚡',
    author: 'Alex Turner',
    title: 'Performance Optimization Tips',
    excerpt: 'Make your web applications lightning fast. Learn about code splitting, lazy loading, caching strategies, and tools to measure and improve performance.',
    tags: ['Performance', 'Optimization'],
},
];