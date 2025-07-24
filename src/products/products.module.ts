import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ProductsController } from 'src/Products/products.controller';
import { ProductsService } from 'src/Products/products.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, PrismaService],
})
export class ProductsModule {}
