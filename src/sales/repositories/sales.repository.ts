import { Injectable } from '@nestjs/common';
import { Prisma, Sales } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSaleDto } from '../dto/create-sale.dto';
import { UpdateSaleDto } from '../dto/update-sale.dto';
import { SalesEntity } from '../entities/sales.entity';

@Injectable()
export class SalesRepository {
    constructor(private readonly prisma: PrismaService) {}

    async findAll(): Promise<SalesEntity[]> {
        return this.prisma.sales.findMany();
    }

    async findOne(id: string): Promise<Sales> {
        const sale = await this.prisma.sales.findUnique({ where: { id } });
        return sale;
    }

    async create(createSaleDto: CreateSaleDto): Promise<SalesEntity> {
        return this.prisma.sales.create({
            data: createSaleDto,
        });
    }

    async createMany(
        createSaleDto: CreateSaleDto[],
    ): Promise<Prisma.BatchPayload> {
        return this.prisma.sales.createMany({
            data: createSaleDto,
        });
    }

    async update(
        id: string,
        updateSaleDto: UpdateSaleDto,
    ): Promise<SalesEntity> {
        return this.prisma.sales.update({
            where: { id },
            data: updateSaleDto,
        });
    }

    async remove(id: string): Promise<SalesEntity> {
        return this.prisma.sales.delete({ where: { id } });
    }
}
