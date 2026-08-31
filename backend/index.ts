import app from "./src/app";
import { connectDB } from "./src/config/database";
import { createServer } from "http";
import { initializeSocket } from "./src/utils/socket";

const PORT = process.env.PORT || 3000;

const httpServer = createServer(app)

initializeSocket(httpServer)

connectDB()
  .then(() => {
    httpServer.listen(PORT, () => {
      console.log("server is running on PORT:", PORT);
    });
  })
  .catch((err) => {
    console.error("Failed to start server:", err);
    process.exit(1);
  });
