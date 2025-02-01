import express from "express"
import dotenv from "dotenv"
import pool from "./db.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

//Middleware
app.use(express.json());

//Routes

//Error handling middleware

//Tesing portgres connection
app.get("/", async(req, res) => {
    const result = await pool.query("SELECT current_database()");
    res.send(`The database name is: ${result.rows[0].current_database}`)
})

//Server running
app.listen(port, () => {
    console.log(`Server is running on http:localhost:${port}`)
})