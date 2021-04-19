import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { BooksModel } from '../books.model';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private booksService: BooksService, private router: Router) { }

  book = new BooksModel(null, null, null, null, null, null, null);

  submit() {
    this.booksService.addbook(this.book).subscribe(status => {
      if (status.message == "success") {
        this.router.navigate(['/books'])
      }
    })
  }

  ngOnInit(): void {
  }

}
