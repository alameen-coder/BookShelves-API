import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { BookshelfModule } from './bookshelf/bookshelf.module';
@Module({
  imports: [BooksModule, PrismaModule, BookshelfModule],
  providers: [PrismaService],
})
export class AppModule {}
