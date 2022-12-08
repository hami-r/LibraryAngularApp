import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { EntryBookComponent } from './entry-book/entry-book.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';

const myRoute: Routes = [
  {
    path:"",
    component: AdminLoginComponent
  },
  {
    path:"login",
    component:UserLoginComponent
  },
  {
    path:"signup",
    component:UserRegisterComponent
  },
  {
    path:"view",
    component:ViewBookComponent
  },
  {
    path:"issue",
    component:IssueBookComponent
  },
  {
    path:"search",
    component:SearchBookComponent
  },
  {
    path:"edit",
    component:EditBookComponent
  },
  {
    path:"delete",
    component:DeleteBookComponent
  },
  {
    path:"add",
    component:EntryBookComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserRegisterComponent,
    ViewBookComponent,
    EntryBookComponent,
    IssueBookComponent,
    SearchBookComponent,
    EditBookComponent,
    DeleteBookComponent,
    NavbarComponent,
    UserNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
