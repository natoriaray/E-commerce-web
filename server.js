import express from "express"
import dotenv from "dotenv"

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

//Middleware
app.use(express.json());

//Routes

//Error handling middleware

//Server running
app.listen(port, () => {
    console.log(`Server is running on http:localhost:${port}`)
})