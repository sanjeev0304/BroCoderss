import dotenv from "dotenv"
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
    path: './.env'
})
const port = process.env.PORT || 8000;
connectDB()
.then(() => {
    app.listen(process.env.PORT , () => {
        console.log(`⚙️ Server is running at port : http://localhost:${port}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})


