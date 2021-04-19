import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { BooksModel } from '../books.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private bookService: BooksService, private router: Router) { }

  books: BooksModel[];

  checkedStars(number) {
    return Array(Number(number));
  }

  unCheckedStars(number) {
    return Array(5 - Number(number))
  }

  ngOnInit(): void {

    this.bookService.getBooks().subscribe(data => {
      this.books = data.reverse();
    })

  }

}
