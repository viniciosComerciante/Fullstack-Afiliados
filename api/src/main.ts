import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadFormatInterceptor } from './common/errors/interceptors/badFormat.interceptor';
import { ConflictInterceptor } from './common/errors/interceptors/conflict.interceptor';
import { DatabaseInterceptor } from './common/errors/interceptors/database.interceptor';
import { NotFoundInterceptor } from './common/errors/interceptors/notFound.interceptor';
import { UnauthorizedInterceptor } from './common/errors/interceptors/unauthorized.interceptor';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }),
    );
    app.useGlobalInterceptors(new ConflictInterceptor());
    app.useGlobalInterceptors(new DatabaseInterceptor());
    app.useGlobalInterceptors(new UnauthorizedInterceptor());
    app.useGlobalInterceptors(new NotFoundInterceptor());
    app.useGlobalInterceptors(new BadFormatInterceptor());
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
