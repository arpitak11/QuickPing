//imports express
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"

const app=express(); // start server

dotenv.config();
const PORT=process.env.PORT || 5000; //either 5000 or PORT 8000
//test route
app.get("/", (req, res)=>{
    //root route 5000
    res.send("hello world!!");
})

app.use("/api/auth", authRoutes); // whenever we will go to /api/auth we will go to authRoutes

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); //it makes listening on port 5000