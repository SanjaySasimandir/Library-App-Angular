import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { BooksModel } from '../books.model';

@Component({
  selector: 'app-booksedit',
  templateUrl: './booksedit.component.html',
  styleUrls: ['./booksedit.component.css']
})
export class BookseditComponent implements OnInit {

  constructor(private booksService: BooksService, private router: Router) { }

  books: BooksModel[];

  delete(id){
    console.log('yes')
    if (confirm("The selected book will be deleted!")) {
      this.booksService.deleteBook(id).subscribe(status => {
        if(status.message=="success"){
          this.ngOnInit();
        }
      })
    }

  }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe(data => {
      this.books = data.reverse();
    });
  }

}
