import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorsService } from 'src/app/services/authors.service';
import { AuthorsModel } from '../authors.model';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor(private AuthorsService: AuthorsService, private router: Router) { }

  authors: AuthorsModel;

  ngOnInit(): void {
    this.AuthorsService.getAuthors().subscribe(data => {
      this.authors = data.reverse();
    });
  }

}
