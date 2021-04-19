import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BooksComponent } from './pages/books/books.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { AddbookComponent } from './pages/addbook/addbook.component';
import { AddauthorComponent } from './pages/addauthor/addauthor.component';
import { EditComponent } from './pages/edit/edit.component';
import { BookeditComponent } from './pages/bookedit/bookedit.component';
import { AuthoreditComponent } from './pages/authoredit/authoredit.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BookComponent } from './pages/book/book.component';
import { AuthorComponent } from './pages/author/author.component';
import { BookseditComponent } from './pages/booksedit/booksedit.component';
import { AuthorseditComponent } from './pages/authorsedit/authorsedit.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BooksComponent,
    AuthorsComponent,
    AddbookComponent,
    AddauthorComponent,
    EditComponent,
    BookeditComponent,
    AuthoreditComponent,
    LoginComponent,
    RegisterComponent,
    BookComponent,
    AuthorComponent,
    BookseditComponent,
    AuthorseditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
