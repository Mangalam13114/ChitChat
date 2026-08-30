import express from "express"

import authRoutes from "./routes/authRoutes"
import chatRoutes from "./routes/chatRoutes"
import messageRoutes from "./routes/messageRoutes"
import userRoutes from "./routes/userRoutes"

const app = express()

app.use(express.json());   // parses incoming JSON request bodies and make them available as req.body in your route handlers

app.get("/health", (req, res) => {
    res.json({status: "OK", message: " server is running"});
});


app.use("/api/auth", userRoutes)
app.use("/api/chat", chatRoutes)
app.use("/api/message", messageRoutes)
app.use("/api/users", userRoutes)


export default app;