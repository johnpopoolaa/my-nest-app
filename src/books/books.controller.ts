import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './book.interface';

@Controller('books')
@UsePipes(new ValidationPipe())
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Get()
    findAll(): Book[] {
        return this.booksService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Book {
        return this.booksService.findOne(id);
    }

    @Post()
    create(@Body() createBookDto: CreateBookDto): Book {
        return this.booksService.create(createBookDto);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updateBookDto: UpdateBookDto): Book {
        return this.booksService.update(id, updateBookDto);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number): void {
        return this.booksService.delete(id);
    }
}
