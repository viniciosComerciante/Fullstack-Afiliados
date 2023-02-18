import { Injectable } from '@nestjs/common';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
    constructor(private readonly repository: UsersRepository) {}

    create(createUserDto: CreateUserDto) {
        return this.repository.create(createUserDto);
    }

    async findAll() {
        return this.repository.findAll();
    }

    async findOne(id: string): Promise<UserEntity> {
        const user = await this.repository.findOne(id);
        if (!user) {
            throw new NotFoundError('Usuário não encontrado');
        }
        return user;
    }

    update(id: string, updateUserDto: UpdateUserDto) {
        return this.repository.update(id, updateUserDto);
    }

    remove(id: string) {
        return this.repository.remove(id);
    }
}
