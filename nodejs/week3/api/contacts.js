import express from 'express';
import database from "../database.js";

const router = express.Router();
const apiRouter = express.Router();
const contactsAPIRouter = express.Router();

contactsAPIRouter.get("/", async (req, res) => {
    let query = database.select("*").from("contacts");
   
    if ("sort" in req.query) {
        const validTags = ["first_name asc", "first_name desc", "last_name asc", "last_name desc"]
        const orderBy = req.query.sort.toString().toLocaleLowerCase();
       
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