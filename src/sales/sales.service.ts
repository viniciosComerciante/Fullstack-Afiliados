import { Injectable } from '@nestjs/common';
import { Readable } from 'stream';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { SalesRepository } from './repositories/sales.repository';
import * as readline from 'readline';
import { delimiter } from 'src/common/utils/delimiter';
import { DataValidator } from 'src/common/utils/validateData';
import { BadFormatError } from 'src/common/errors/types/BadFormatError';

@Injectable()
export class SalesService {
    constructor(
        private readonly repository: SalesRepository,
        private readonly validate: DataValidator,
    ) {}

    create(createSaleDto: CreateSaleDto) {
        return this.repository.create(createSaleDto);
    }

    async createMany(file: Express.Multer.File) {
        //data place delimiter on line
        const {
            date_delimiter,
            product_delimiter,
            salesman_delimiter,
            transaction_type_delimiter,
            value_delimiter,
        } = delimiter;

        const stream = Readable.from(file.buffer);

        const parseFile = readline.createInterface({
            input: stream,
            output: process.stdout,
            terminal: false,
        });

        let salesParsed: CreateSaleDto[] = [];

        for await (const line of parseFile) {
            salesParsed.push({
                transaction_type: +line.slice(
                    transaction_type_delimiter.initial,
                    transaction_type_delimiter.final,
                ),
                date: new Date(
                    line.slice(date_delimiter.initial, date_delimiter.final),
                ),
                product: line
                    .slice(product_delimiter.initial, product_delimiter.final)
                    .trim(),
                salesman: line
                    .slice(salesman_delimiter.initial, salesman_delimiter.final)
                    .trim(),
                value: +line.slice(
                    value_delimiter.initial,
                    value_delimiter.final,
                ),
            });
        }

        //remove bank lines
        salesParsed = salesParsed.filter(
            sale =>
                sale.value !== 0 &&
                sale.transaction_type !== 0 &&
                sale.salesman !== '' &&
                sale.product !== '',
        );

        salesParsed.forEach((sale, i) => {
            if (!this.validate.date(sale.date)) {
                throw new BadFormatError(
                    `line ${i + 1} sale date is in an invalid format`,
                );
            }
            if (!this.validate.number(sale.transaction_type)) {
                throw new BadFormatError(
                    `line ${i + 1} transaction_type is in an invalid format`,
                );
            }
        });

        return this.repository.createMany(salesParsed);
    }

    findAll() {
        return this.repository.findAll();
    }

    findOne(id: string) {
        return this.repository.findOne(id);
    }

    update(id: string, updateSaleDto: UpdateSaleDto) {
        return this.repository.update(id, updateSaleDto);
    }

    remove(id: string) {
        return this.repository.remove(id);
    }
}
