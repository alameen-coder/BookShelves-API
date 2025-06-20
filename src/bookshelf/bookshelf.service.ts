import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookshelfService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createBookshelfDto: Prisma.BookshelfCreateInput) {
    return await this.prismaService.bookshelf.create({ data: createBookshelfDto });
  }

  async findAll() {
    return await this.prismaService.bookshelf.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.bookshelf.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateBookshelfDto: Prisma.BookshelfUpdateInput) {
    return await this.prismaService.bookshelf.update({
      where: { id },
      data: updateBookshelfDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.bookshelf.delete({
      where: { id },
    });
  }
}
