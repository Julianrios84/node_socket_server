import cors from "cors";
import express from "express";
import Server from "./classes/server";
import router from "./routes/router";

const server = Server.Instance;

// Middleware
server.app.use(express.urlencoded({extended: true}))
server.app.use(express.json())
server.app.use(cors({
  origin: true, credentials: true
}))

// Routes
server.app.use('/', router)

server.start(() => {
  console.log(`Server on port ${server.port}`)
})