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
  create(@Body() dto: CreateBookDto) {
    return this.booksService.create(dto);
  }

  @Get() // GET /books
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id') // GET /users/:id
  findOne(@Body('id') id: string) {
    return this.booksService.findOne(id);
  }

  @Patch(':id') // PATCH /books/:id
  @UsePipes(new ValidationPipe({ whitelist: true }))
  update(@Param('id') id: string, @Body() dto: UpdateBookDto) {
    return this.booksService.update(id, dto);
  }

  @Delete(':id') // DELETE /books/:id
  remove(@Param('id') id: string) {
    return this.booksService.remove(id);
  }
}
