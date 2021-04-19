import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { BooksModel } from '../books.model';

@Component({
  selector: 'app-bookedit',
  templateUrl: './bookedit.component.html',
  styleUrls: ['./bookedit.component.css']
})
export class BookeditComponent implements OnInit {

  constructor(private booksService: BooksService, private router: Router, private activatedRoute:ActivatedRoute) { }

  book = new BooksModel(null, null, null, null, null, null, null);

  submit() {
    this.booksService.updateBook(this.book).subscribe(status => {
      if (status.message == "success") {
        this.router.navigate(['/edit/books'])
      }
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.booksService.getBook(params.id).subscribe(data => {
        this.book = data;
      });
    });
  }

}
