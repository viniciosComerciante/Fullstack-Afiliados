import { Injectable } from '@nestjs/common';

@Injectable()
export class DataValidator {
    date(data: Date): boolean {
        if (data.toLocaleString() === 'Invalid Date') {
            return false;
        }
        return true;
    }
    number(data: number): boolean {
        if (isNaN(data)) {
            return false;
        }
        if (data < 1 || data > 4) return false;
        return true;
    }
}
