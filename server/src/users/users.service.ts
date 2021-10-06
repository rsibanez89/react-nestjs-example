import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
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

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
