import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './book.interface';

@Injectable()
export class BooksService {
    private books: Book[] = [];
    private idCounter = 1;

    findAll(): Book[] {
        return this.books;
    }

    findOne(id: number): Book {
        const book = this.books.find(book => book.id === id);
        if (!book) {
            throw new NotFoundException(`Book with ID ${id} not found`);
        }
        return book;
    }

    create(book: Omit<Book, 'id'>): Book {
        const newBook = { id: this.idCounter++, ...book };
        this.books.push(newBook);
        return newBook;
    }

    update(id: number, updatedBook: Partial<Book>): Book {
        const book = this.findOne(id);
        Object.assign(book, updatedBook);
        return book;
    }

    delete(id: number): void {
        const index = this.books.findIndex(book => book.id === id);
        if (index === -1) {
            throw new NotFoundException(`Book with ID ${id} not found`);
        }
        this.books.splice(index, 1);
    }
}
