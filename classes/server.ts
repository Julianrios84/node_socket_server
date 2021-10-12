import express from "express";
import { SERVER_PORT } from "../global/enviroment";
import { Server as serverIO } from "socket.io";
import { Server as serverHttp, createServer as createServerHttp } from "http";
import * as socket from "../sockets/socket";

export default class Server {

  private static _instance: Server;

  public app: express.Application;
  public port: number;
  public io: serverIO;
  private serverHttp: serverHttp;

  private constructor() {
    this.app = express();
    this.port = SERVER_PORT;
    this.serverHttp = createServerHttp(this.app);
    this.io = new serverIO(this.serverHttp, {
      cors: {
        origin: "http://localhost:4200",
        credentials: true
      }
    });

    this.listenSockets();
  }

  // Solo una instancia del servidor
  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  private listenSockets() {
    this.io.on('connection', client => {
      console.log(`Client connected`)

      // Message
      socket.message(client, this.io);

      // Disconnect
      socket.disconnect(client);
    })
  }

  start(callback: Function) {
    this.serverHttp.listen(this.port, callback());
  }
}