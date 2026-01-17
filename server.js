import express from "express"
import path from "path"

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/posts", (req, res) => {
    res.render("posts");
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
