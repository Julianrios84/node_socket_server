import cors from "cors";
import Server from "./classes/server";
import router from "./routes/router";

const server = new Server();

// Middleware
server.app.use(cors({
  origin: true, credentials: true
}))

// Routes
server.app.use('/', router)

server.start(() => {
  console.log(`Server on port ${server.port}`)
})