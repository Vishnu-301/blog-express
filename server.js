import express from "express"
import ejs from "ejs"
import bodyParser from "body-parser"
import axios from "axios"
import path from "path"

const app = express();
const port = process.env.PORT || 3000;
const __dirname = path.resolve();

const API_URL = "http://localhost:4000";

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

// using body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// creating register function
function register(req, res, next) {
    const { name, email, password, confirm_password } = req.body;

    // request the form data
    req.regData = {
        name: name,
        email: email,
        password: password,
        confirm_password: confirm_password
    }

    // check if form data exist then render page
    if (req.regData) {
        res.redirect('/')
    } else {
        console.log('fill all fields')
    }
    next();
}

// creating login function
function login(req, res, next) {
    const { email, password } = req.body;

    req.login = {
        email: email,
        password: password
    }

    if (req.login) {
        console.log('login successful');
        res.redirect('/')
    } else {
        console.log('invalid email or password');
    }

    // if (req.regData.email === req.login.email && req.regData.password === req.login.password ) {
    //     console.log('login successful');
    //     res.redirect('/')
    // }else {
    //     console.log('invalid email or password');
    // }
}

app.get("/", (req, res) => {
    res.render("index");
});

// render posts page using stored array data
app.get("/all/posts", async (req, res) => {
    try {
        const response = await axios.get(`${API_URL}/posts`);
        const allposts = response.data;
        res.render("posts", { allposts });
    } catch (error) {
        res.json({ message: "posts not found" })
            .status(500)
    }
});

app.get("/create", (req, res) => {
    res.render("create");
});

// get form data when submitted and store in array
app.post("/posts/create", async (req, res) => {
    try {
        const response = await axios.post(`${API_URL}/posts`, req.body);
        res.status(200)
            .redirect("/");
    } catch (error) {

    }
});

// handle register and login routes
app.post('/register', register, (req, res) => {
    console.log(req.regData)
});

app.post('/login', login, (req, res) => {
    console.log(req.login)
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
});

// stored posts data
// const posts = [{
//     image: '📱',
//     author: 'Sarrah Johnson',
//     title: 'Getting Started with Web Development',
//     content: 'Learn the fundamentals of web development and start your journey as adeveloper.Well cover HTML, CSS, and JavaScript basics to get you started.'
// }, {
//     image: '🚀',
//     author: 'Mike Chen',
//     title: 'Advanced javascript Technologies',
//     content: 'Explore advanced JavaScript concepts including closures, prototypes, andasync/ await.Perfect for developers looking to level up their skills.'
// }, {
//     image: '🎨',
//     author: 'Emma Davis',
//     title: 'UI design principles for modern Apps',
//     content: 'Master the art of creating beautiful and functional user interfaces.Learn about spacing, typography, colors, and user experience best practices.'
// }, {
//     image: '💻',
//     author: 'James Wilson',
//     title: 'Building Scalable Backend Systems',
//     content: 'Discover the architecture and patterns needed to build backend systems that can scale. Learn about databases, APIs, and best practices for production code.'
// }, {
//     image: '🔒',
//     author: 'Lisa Anderson',
//     title: 'Web Security Essentials',
//     content: 'Protect your applications from common vulnerabilities. Learn about HTTPS, authentication, SQL injection, XSS, and other security best practices.'
// }, {
//     image: '⚡',
//     author: 'Alex Turner',
//     title: 'Performance Optimization Tips',
//     content: 'Make your web applications lightning fast. Learn about code splitting, lazy loading, caching strategies, and tools to measure and improve performance.'
// },
// ];