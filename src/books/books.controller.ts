import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post() // POST /books
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
    }),
  )
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get() // GET /books
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id') // GET /users/:id
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.booksService.findOne(id);
  }

  @Patch(':id') // PATCH /books/:id
  @UsePipes(new ValidationPipe({ whitelist: true }))
  update(@Param('id', ParseIntPipe) id: number, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(id, updateBookDto);
  }

  @Delete(':id') // DELETE /books/:id
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.booksService.delete(id);
  }
}
