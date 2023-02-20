import { Sales } from '@prisma/client';

export class SalesEntity implements Sales {
    transaction_type: number;
    date: Date;
    product: string;
    value: bigint;
    salesman: string;
    id: string;
}
