import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) { }

  getAuthors() {
    return this.http.get<any>('http://localhost:5555/authors/getauthors');
  }

  getAuthor(id: any) {
    return this.http.post<any>('http://localhost:5555/authors/getauthor', { "id": id });
  }
  
  addAuthor(data: any) {
    return this.http.post<any>('http://localhost:5555/authors/addauthor', data);
  }
  
  deleteAuthor(id: any) {
    return this.http.post<any>('http://localhost:5555/authors/deleteauthor', { "id": id });
  }

  updateAuthor(data: any) {
    return this.http.post<any>('http://localhost:5555/authors/updateauthor', data);
  }
}
