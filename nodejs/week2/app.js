import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

// To import documents.json
//const documents = require("./documents.json")
import documents from "./documents.json" assert { type: "json" };

// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("This is a search engine");
});

// http://localhost:3000/search?q=HELLO
app.get("/search", (req, res) => {
    const input = (req.query.q)
    try {
        if (input === undefined) {
            return res.send(documents)
        } else {
            const regex = new RegExp(input, 'i');
            const filteredItems = documents.filter((item) => {
                return ((Object.values(item)).find(element => regex.test(element)))
            });

            if (!filteredItems.length) {
                return res.status(404).send();
            }
            return (res.status(200).send(filteredItems))
        }
    }
    catch (error) {
        res.status(500).send({ error: 'Something failed!' })
    }
});

// http://localhost:3000/documents/2
app.get("/documents/:id", (req, res) => {
    const id = req.params.id;

    try {
        if (isNaN(id)) {
            return res.status(400).json({ err: "Numbers only, please!" })
        } else {
            const searchID = documents.find(values => values.id == id)

            if (!searchID) {
                return res.status(404).send();
            }
            return res.status(200).send(searchID)
        }
    } catch (error) {
        res.status(500).send({ error: 'Something failed!' })
    }
});

// http://localhost:3000/search
// http://localhost:3000/search?q=HELLO

app.post("/search", (req, res) => {
    const input = (req.query.q);
    const [field] = Object.values(req.body);

    try {
        if (input) {
            const regex = new RegExp(input, 'i');
            const filteredItems = documents.filter((item) => {
                return ((Object.values(item)).find(element => regex.test(element)))
            });

            if (!filteredItems.length) {
                return res.status(404).send();
            }
            return (res.status(200).send(filteredItems))

        } else if (field) {
            const search = [Object.values(field)]
            const regex = new RegExp(search, 'i');

            const filteredItems = documents.filter((item) => {
                return ((Object.values(item)).find(element => regex.test(element)))
            });

            if (!filteredItems.length) {
                return res.status(404).send();
            }
            return (res.status(200).send(filteredItems))
        } else {
            return res.status(200).send(documents)
        }
    } catch (error) {
        res.status(500).send({ error: 'Something failed!' })
    }
});

// Listening to port 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});  
