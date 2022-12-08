import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent {
  constructor(private api:ApiService){}

  bookTitle = ""
  searchData:any = []
  hide:boolean = false

  readValues = () => {
    let data = {
      "bookTitle":this.bookTitle
    }
    console.log(data);
    this.api.searchBook(data).subscribe(
      (response:any) => {
        console.log(response);
        if (response.length==0) {
          this.hide=false
          alert("Invalid")
        } else {
          this.searchData=response
          this.hide=true
        }
      }
    )
    
  }
}
