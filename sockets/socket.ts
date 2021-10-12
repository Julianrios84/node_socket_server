import socketIO, { Socket } from "socket.io";
import { User } from "../classes/user";
import { UserList } from "../classes/user-list";

export const usersOnline = new UserList();

export const connectClient = (client: Socket) => {
  const user = new User(client.id);
  usersOnline.add(user);
}

export const disconnect = (client: Socket) => {
  client.on('disconnect', () => {
    usersOnline.removeUser(client.id);
    console.log('Client disconnect')
  })
}

export const message = (client: Socket, io: socketIO.Server) => {
  client.on('message', (payload: {to: string, body: string}) => {
    console.log(payload);
    io.emit('message-new', payload);
  })
}


export const configUser = (client: Socket, io: socketIO.Server) => {
  client.on('config-user', (payload: {name: string}, callback: Function) => {
    usersOnline.update(client.id, payload.name);
    callback({
      event: true,
      message: `${payload.name} user configured`
    })
  })
}