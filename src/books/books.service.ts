import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  // Create a new book
  async create(createBookDto: CreateBookDto) {
    return await this.prisma.book.create({
      data: createBookDto,
    });
  }

  // Get all books
  async findAll() {
    return await this.prisma.book.findMany();
  }

  // Get one book by ID, or throw if not found
  async findOne(id: string) {
    const book = await this.prisma.book.findUnique({
      where: { id },
    });

    if (!book) {
      throw new NotFoundException('Book not found');
    }

    return book;
  }

  // Update a book by ID
  async update(id: string, updateBookDto: UpdateBookDto) {
    await this.findOne(id); // ensures it exists or throws
    return await this.prisma.book.update({
      where: { id },
      data: updateBookDto,
    });
  }

  // Delete a book by ID
  async remove(id: string) {
    await this.findOne(id); // ensures it exists or throws
    return await this.prisma.book.delete({
      where: { id },
    });
  }
}
