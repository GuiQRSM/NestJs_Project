import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateProductInputDTO } from 'src/products/dto/CreateProductInput.dto';
import { UpdateProductInputDTO } from 'src/products/dto/UpdateProductInput.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(body: CreateProductInputDTO) {
    const newProduct = await this.prisma.product.create({
      data: {
        name: body.name,
        price: Number(body.price),
      },
    });
    return newProduct;
  }

  async findAll(id: number) {
    if (id) {
      const products = await this.prisma.product.findUnique({ where: { id } });
      return products;
    }
    const productMany = await this.prisma.product.findMany();
    return productMany;
  }

  async findById(id: number) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (product) return product;
    throw new NotFoundException();
  }

  async update(id: number, body: UpdateProductInputDTO) {
    const product = await this.findById(id);
    if (!product) throw new NotFoundException();

    const alterProduct = await this.prisma.product.update({
      where: { id },
      data: {
        name: body.name,
        price: Number(body.price),
      },
    });
    return alterProduct;
  }

  async delete(id: number) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) throw new NotFoundException();
    await this.prisma.product.delete({ where: { id } });
    return { message: 'Produto deletado!' };
  }
}
