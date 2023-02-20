import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SalesModule } from './sales/sales.module';

@Module({
    imports: [ConfigModule.forRoot(), UsersModule, SalesModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
