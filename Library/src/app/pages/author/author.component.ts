import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorsService } from 'src/app/services/authors.service';
import { AuthorsModel } from '../authors.model';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(private authorService: AuthorsService, private activatedRoute: ActivatedRoute) { }

  author: AuthorsModel;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.authorService.getAuthor(params.id).subscribe(data => {
        this.author = data;
      });
    });
  }

}
