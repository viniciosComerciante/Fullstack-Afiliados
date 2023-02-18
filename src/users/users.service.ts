import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 'da5sda4sd5',
      email: 'vinicompif@gmail.com',
      name: 'vinicios da costa oliveira',
      password: '545422sds6ad',
    },
    {
      id: 'dsa54d4545dsdsd',
      email: 'robertabarros14@gmail.com',
      name: 'Roberta marcial barros',
      password: '65d5sadsds',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new HttpException(`User ID ${id} not found`, HttpStatus.NOT_FOUND);
    }
    return user;
  }

  create(createUserDto: any) {
    return this.users.push(createUserDto);
  }

  update(id: string, updateUserDto: any) {
    const indexUser = this.users.findIndex((user) => user.id === id);

    if (indexUser === -1) return;

    return (this.users[indexUser] = updateUserDto);
  }

  remove(id: string) {
    const indexUser = this.users.findIndex((user) => user.id === id);

    if (indexUser === -1) return;

    return this.users.splice(indexUser, 1);
  }
}
