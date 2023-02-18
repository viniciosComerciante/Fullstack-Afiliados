import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
    imports: [ConfigModule.forRoot(), UsersModule],
    controllers: [AppController],
    providers: [AppService, PrismaService],
})
export class AppModule {}
