import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorsService } from 'src/app/services/authors.service';
import { AuthorsModel } from '../authors.model';

@Component({
  selector: 'app-authorsedit',
  templateUrl: './authorsedit.component.html',
  styleUrls: ['./authorsedit.component.css']
})
export class AuthorseditComponent implements OnInit {

  constructor(private authorsService: AuthorsService, private router: Router) { }

  authors: AuthorsModel;

  delete(id){
    console.log('yes')
    if (confirm("The selected Author will be deleted!")) {
      this.authorsService.deleteAuthor(id).subscribe(status => {
        if(status.message=="success"){
          this.ngOnInit();
        }
      })
    }

  }

  ngOnInit(): void {
    this.authorsService.getAuthors().subscribe(data => {
      this.authors = data.reverse();
    });
  }

}
