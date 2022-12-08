import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addUser = (sendData:any) => {
    return this.http.post("http://localhost:8080/userreg",sendData)
  }

  verifyUser = (sendData:any) => {
    return this.http.post("http://localhost:8080/userlogin",sendData)
  }

  addBook = (sendData:any) => {
    return this.http.post("http://localhost:8080/add",sendData)
  }

  searchBook = (sendData:any) => {
    return this.http.post("http://localhost:8080/search",sendData)
  }

  deleteBook = (sendData:any) => {
    return this.http.post("http://localhost:8080/delete",sendData)
  }

  viewBook = () => {
    return this.http.get("http://localhost:8080/view")
  }

  issueBook = (sendData:any) => {
    return this.http.post("http://localhost:8080/issue",sendData)
  }
}
