import { Injectable } from '@nestjs/common';
import { UserRequest } from './dto/user.request';
import { User } from '@shared/contracts/users';

@Injectable()
export class UsersService {
  private users: User[];

  constructor() {
    this.users = [
      {
        id: 1,
        age: 25,
        email: 'utilapis1@gmai.com',
        firstName: 'util',
        lastName: 'apis',
        username: 'utilapis1',
      },
      {
        id: 2,
        age: 25,
        email: 'utilapis2@gmai.com',
        firstName: 'util',
        lastName: 'apis',
        username: 'utilapis2',
      },
      {
        id: 3,
        age: 25,
        email: 'utilapis3@gmai.com',
        firstName: 'util',
        lastName: 'apis',
        username: 'utilapis3',
      },
      {
        id: 4,
        age: 25,
        email: 'utilapis4@gmai.com',
        firstName: 'util',
        lastName: 'apis',
        username: 'utilapis4',
      },
    ];
  }

  create(createUserDto: UserRequest) {
    return 'This action adds a new user';
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((u) => u.id === id);
  }

  update(id: number, updateUserDto: UserRequest) {
    const index = this.users.findIndex((u) => u.id === id);
    const newUser = { ...this.users[index], ...updateUserDto };
    this.users[index] = newUser;
    return newUser;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
