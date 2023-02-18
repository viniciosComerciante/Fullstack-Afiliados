import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

//partial type is used to define that CrateUserDto props is not mandatory 16/02/2023
export class UpdateUserDto extends PartialType(CreateUserDto) {}
