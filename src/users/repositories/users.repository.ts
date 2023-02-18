import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UsersRepository {
    constructor(private readonly prisma: PrismaService) {}

    async findAll(): Promise<UserEntity[]> {
        return this.prisma.user.findMany();
    }

    async findOne(id: string): Promise<UserEntity> {
        const user = await this.prisma.user.findUnique({ where: { id } });
        if (!user) {
            throw new HttpException(
                `Não foi encontrado usuário com este e-mail`,
                HttpStatus.NOT_FOUND,
            );
        }
        return user;
    }

    async create(createUserDto: CreateUserDto): Promise<UserEntity> {
        return this.prisma.user.create({
            data: createUserDto,
        });
    }

    async update(
        id: string,
        updateUserDto: UpdateUserDto,
    ): Promise<UserEntity> {
        return this.prisma.user.update({
            where: { id },
            data: updateUserDto,
        });
    }

    async remove(id: string): Promise<UserEntity> {
        return this.prisma.user.delete({ where: { id } });
    }
}
