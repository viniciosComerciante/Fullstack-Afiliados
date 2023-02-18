import { Injectable } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
    private users: UserEntity[] = [
        {
            id: 'da5sda4sd5',
            email: 'vinicompif@gmail.com',
            name: 'vinicios da costa oliveira',
            password: '545422sds6ad',
            created_at: new Date(),
            updated_at: new Date(),
        },
        {
            id: 'dsa54d4545dsdsd',
            email: 'robertabarros14@gmail.com',
            name: 'Roberta marcial barros',
            password: '65d5sadsds',
            created_at: new Date(),
            updated_at: new Date(),
        },
    ];
}
