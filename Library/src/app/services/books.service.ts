import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get<any>('http://localhost:5555/books/getbooks');
  }

  getBook(id: any) {
    return this.http.post<any>('http://localhost:5555/books/getbook', { "id": id });
  }
  
  addbook(book: any) {
    return this.http.post<any>('http://localhost:5555/books/addbook', { "book": book });
  }
  
  deleteBook(id: any) {
    return this.http.post<any>('http://localhost:5555/books/deletebook', { "id": id });
  }

  updateBook(book: any) {
    return this.http.post<any>('http://localhost:5555/books/updatebook', { "book": book });
  }
  
}
