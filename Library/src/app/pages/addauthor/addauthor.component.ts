import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorsService } from 'src/app/services/authors.service';
import { AuthorsModel } from '../authors.model';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {

  constructor(private router: Router, private authorsService: AuthorsService) { }

  author: AuthorsModel=new AuthorsModel(null, null, null, null, null, null, null);

  submit(){
    console.log(this.author)
    this.authorsService.addAuthor(this.author).subscribe(status=>{
      if(status.message==="success"){
        this.router.navigate(['/authors'])
      }
    })
  }

  ngOnInit(): void {
  }

}
