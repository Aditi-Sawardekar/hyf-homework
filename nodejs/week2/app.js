const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// To import documents.json
const documents = require("./documents.json")

// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
    res.send("This is a search engine");
});

// http://localhost:3000/search?q=HELLO
app.get("/search", (req, res) => {
    const input = (req.query.q)
    if (input === undefined) {
        res.send(documents)
    } else {
        const search = input.toLowerCase();

        const filteredItems = documents.filter((item) => {
            const result = ([Object.values(item)].toString().includes(search));
            return (result);
        });
        res.send(filteredItems)
    }
});

// http://localhost:3000/documents/2
app.get("/documents/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    const searchID = documents.find(values => values.id = id);
    res.send(searchID)
});

// http://localhost:3000/search
// http://localhost:3000/search?q=HELLO

app.post("/search", (req, res) => {
    const input = (req.query.q);
    const [field] = Object.values(req.body);
    
    try {
        if (input) {
            const search = input.toLowerCase();

            const filteredItems = documents.filter((item) => {
                const result = ([Object.values(item)].toString().includes(search));
                return (result);
            });
            
            res.send(filteredItems)
        } else if (field) {
            const [search] = Object.entries(field)
            
            const filteredItems = documents.filter((item) => {
                const result = ([Object.entries(item)].toString().includes(search));
                return (result);
            });

            res.send(filteredItems)
        } else {
            res.send(documents)
        }
    } catch (error) {
        return res.send(error);
    }
});

// Listening to port 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
