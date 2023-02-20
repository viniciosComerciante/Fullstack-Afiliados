import {
    IsDateString,
    IsIn,
    IsInt,
    IsNotEmpty,
    IsString,
} from 'class-validator';

export class CreateSaleDto {
    @IsInt()
    @IsIn([1, 2, 3, 4])
    @IsNotEmpty()
    transaction_type: number;
    @IsDateString()
    @IsNotEmpty()
    date: Date;
    @IsString()
    @IsNotEmpty()
    product: string;
    @IsInt()
    @IsNotEmpty()
    value: number;
    @IsString()
    @IsNotEmpty()
    salesman: string;
}
