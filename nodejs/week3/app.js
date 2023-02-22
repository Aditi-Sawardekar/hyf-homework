import express from 'express';
const app = express();
const port = process.env.PORT;

import apiRouter from "./api/contacts.js";

app.use(express.json());
app.use("/api", apiRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});