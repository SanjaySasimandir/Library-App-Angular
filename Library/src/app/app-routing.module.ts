import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddauthorComponent } from './pages/addauthor/addauthor.component';
import { AddbookComponent } from './pages/addbook/addbook.component';
import { AuthorComponent } from './pages/author/author.component';
import { AuthoreditComponent } from './pages/authoredit/authoredit.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { AuthorseditComponent } from './pages/authorsedit/authorsedit.component';
import { BookComponent } from './pages/book/book.component';
import { BookeditComponent } from './pages/bookedit/bookedit.component';
import { BooksComponent } from './pages/books/books.component';
import { BookseditComponent } from './pages/booksedit/booksedit.component';
import { EditComponent } from './pages/edit/edit.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'addbook', component: AddbookComponent },
  { path: 'addauthor', component: AddauthorComponent },
  { path: 'edit', component: EditComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'books/:id', component: BookComponent },
  { path: 'authors/:id', component: AuthorComponent },
  { path: 'edit/books', component: BookseditComponent },
  { path: 'edit/authors', component: AuthorseditComponent },
  { path: 'edit/books/:id', component: BookeditComponent },
  { path: 'edit/authors/:id', component: AuthoreditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
