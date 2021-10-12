import { User } from "./user";

export class UserList {

  private list: User[] = [];

  constructor() {

  }

  // Add user
  public add(user: User) {
    this.list.push(user);
    // console.log(`User added: ${JSON.stringify(user)}`);
    return user;
  }

  // Update username
  public update(id: string, name: string) {
    for(let user of this.list) {
      if(user.id === id) {
        user.name = name;
        break;
      }
    }
    console.log(`User list: ${JSON.stringify(this.list)}`)
  }

  // Obtain list
  public getList() {
    return this.list;
  }

  // Obtain user
  public getUser(id: string) {
    return this.list.find(user => user.id === id);
  }

  // Obtain users from a room
  public getUserRoom(room: string) {
    return this.list.filter(user => user.room == room);
  }

  // Remove user
  public removeUser(id: string) {
    const user = this.getUser(id);
    this.list = this.list.filter(user => user.id !== id);
    return user;
  }
}