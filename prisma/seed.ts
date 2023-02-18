import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
    await prisma.transactionsType.upsert({
        where: { type: 1 },
        update: {},
        create: {
            description: 'Venda produtor',
            nature: 'INCOME',
            type: 1,
        },
    });
    await prisma.transactionsType.upsert({
        where: { type: 2 },
        update: {},
        create: {
            description: 'Venda afiliado',
            nature: 'INCOME',
            type: 2,
        },
    });
    await prisma.transactionsType.upsert({
        where: { type: 3 },
        update: {},
        create: {
            description: 'Comissão paga',
            nature: 'OUTCOME',
            type: 3,
        },
    });
    await prisma.transactionsType.upsert({
        where: { type: 4 },
        update: {},
        create: {
            description: 'Comissão recebida',
            nature: 'INCOME',
            type: 4,
        },
    });
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async e => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
