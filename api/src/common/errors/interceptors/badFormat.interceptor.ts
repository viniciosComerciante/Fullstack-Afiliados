import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    UnprocessableEntityException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BadFormatError } from '../types/BadFormatError';

@Injectable()
export class BadFormatInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            catchError(error => {
                if (error instanceof BadFormatError) {
                    throw new UnprocessableEntityException(error.message);
                } else {
                    throw error;
                }
            }),
        );
    }
}
