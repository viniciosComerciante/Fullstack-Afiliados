import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    NotFoundException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotFoundError } from '../types/NotFoundError';

@Injectable()
export class NotFoundInterceptor implements NestInterceptor {
    intercept(_: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            catchError(error => {
                console.log('catchou');
                if (error instanceof NotFoundError) {
                    throw new NotFoundException(error.message);
                } else {
                    throw error;
                }
            }),
        );
    }
}
