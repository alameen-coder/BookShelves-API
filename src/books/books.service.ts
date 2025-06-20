import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateBookDto } from './dto/update-book.dto';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  private books: Array<{
    id: number;
    title: string;
    author: string;
    year: string;
    description: string;
  }> = [
    // {
    //   id: 1,
    //   title: 'Black book',
    //   author: 'james berry',
    //   year: '2017',
    //   description: 'friction of our minds',
    // },
    // {
    //   id: 2,
    //   title: 'Black book',
    //   author: 'james berry',
    //   year: '2012',
    //   description: 'friction of our minds',
    // },
  ];

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    const book = this.books.find((book) => book.id === id);
    if (!book) {
      throw new NotFoundException(`Book with id ${id} has been deleted or does not exist.`);
    }
    return book;
  }

  create(createBookDto: CreateBookDto) {
    const booksByHighestId = [...this.books].sort((a, b) => b.id - a.id);
    const nextId = booksByHighestId.length > 0 ? booksByHighestId[0].id + 1 : 1;
    const newBook = {
      id: nextId,
      ...createBookDto,
      year: createBookDto.year.toString(),
      description: createBookDto.description || '',
    };
    this.books.push(newBook);
    return newBook;
  }

  update(id: number, updatedBookDto: UpdateBookDto) {
    this.books = this.books.map((book) => {
      if (book.id === id) {
        return {
          ...book,
          ...updatedBookDto,
          year: updatedBookDto.year?.toString() || book.year.toString(),
        };
      }
      return book;
    });
    return this.findOne(id);
  }

  delete(id: number) {
    const removedBook = this.findOne(id);

    this.books = this.books.filter((book) => book.id !== id);
    return removedBook;
  }
}
