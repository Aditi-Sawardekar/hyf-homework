import express from 'express';
import database from "../database.js";

const router = express.Router();
const apiRouter = express.Router();
const contactsAPIRouter = express.Router();

// http://localhost:3000/api/contacts/
// http://localhost:3000/api/contacts/?sort=first_name%20ASC
// http://localhost:3000/api/contacts/?sort=last_name%20DESC

contactsAPIRouter.get("/", async (req, res) => {
    let query = database.select("*").from("contacts");
   
    if ("sort" in req.query) {
        const validTags = ["first_name ASC", "first_name DESC", "last_name ASC", "last_name DESC"]
        const orderBy = req.query.sort.toString();
       
        if (!validTags.includes(orderBy)){
            console.log("SQL Injection");
            return res.status(400).json({err: "Valid sorts only, please!"})
        }

        if (orderBy.length > 0) {
            query = query.orderByRaw(orderBy);            
        }
    }

    console.log("SQL", query.toSQL().sql);

    try {
        const data = await query;
        res.json({ data });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Internal server error" });
    }
});

apiRouter.use("/contacts", contactsAPIRouter);

export default apiRouter;  