import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { SalesRepository } from './repositories/sales.repository';
import { DataValidator } from 'src/common/utils/validateData';

@Module({
    controllers: [SalesController],
    providers: [SalesService, PrismaService, SalesRepository, DataValidator],
})
export class SalesModule {}
