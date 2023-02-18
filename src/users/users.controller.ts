import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Res,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async findAll(@Res() response) {
        return response.status(200).send(this.usersService.findAll());
    }
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.usersService.findOne(id);
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        this.usersService.create(createUserDto);
        return createUserDto;
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateUserDto: UpdateUserDto,
    ) {
        return this.usersService.update(id, updateUserDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.usersService.remove(id);
    }
}
