import { Sales } from '@prisma/client';

export class Sale implements Sales {
    transaction_type: number;
    date: Date;
    product: string;
    value: bigint;
    salesman: string;
    id: string;
}
