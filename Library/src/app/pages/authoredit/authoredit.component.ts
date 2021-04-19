import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorsService } from 'src/app/services/authors.service';
import { AuthorsModel } from '../authors.model';

@Component({
  selector: 'app-authoredit',
  templateUrl: './authoredit.component.html',
  styleUrls: ['./authoredit.component.css']
})
export class AuthoreditComponent implements OnInit {

  constructor(private router: Router, private authorsService: AuthorsService, private activatedRoute: ActivatedRoute) { }

  author: AuthorsModel = new AuthorsModel(null, null, null, null, null, null, null);

  submit() {
    console.log(this.author)
    this.authorsService.updateAuthor(this.author).subscribe(status => {
      if (status.message === "success") {
        this.router.navigate(['/edit/authors'])
      }
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.authorsService.getAuthor(params.id).subscribe(data => {
        this.author = data;
      });
    });
  }

}
