import socketIO, { Socket } from "socket.io";

export const disconnect = (client: Socket) => {
  client.on('disconnect', () => {
    console.log('Client disconnect')
  })
}

export const message = (client: Socket, io: socketIO.Server) => {
  client.on('message', (payload: {to: string, body: string}) => {
    console.log(payload);
    io.emit('message-new', payload);
  })
}