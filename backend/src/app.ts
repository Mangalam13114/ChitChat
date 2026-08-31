import express from "express";
import { clerkMiddleware } from "@clerk/express";
import path from "path";
import authRoutes from "./routes/authRoutes";
import chatRoutes from "./routes/chatRoutes";
import messageRoutes from "./routes/messageRoutes";
import userRoutes from "./routes/userRoutes";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(express.json()); // parses incoming JSON request bodies and make them available as req.body in your route handlers

app.use(clerkMiddleware());
app.get("/health", (_req, res) => {
  res.json({ status: "OK", message: " server is running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

// error handler must come after all the routes and other middlewares so they can catch errors passed with next(err)
// or thrown inside async handlers
app.use(errorHandler);

// serve frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../web /dist")));

  app.get("/{*any}", (_, res) => {
    res.sendFile(path.join(__dirname, "../../web/dist/index.html"));
  });
}

export default app;
