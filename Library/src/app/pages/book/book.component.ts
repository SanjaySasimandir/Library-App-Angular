import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { BooksModel } from '../books.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private booksService: BooksService, private activatedRoute: ActivatedRoute) { }

  book: BooksModel;

  checkedStars(number) {
    return Array(Number(number));
  }

  unCheckedStars(number) {
    return Array(5 - Number(number))
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.booksService.getBook(params.id).subscribe(data => {
        this.book = data;
      });
    });
  }

}
