import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent {
  constructor(private api:ApiService){}
  
  bookTitle = ""

  readValues = () => {
    let data = {
      "bookTitle":this.bookTitle
    }
    console.log(data);
    
    this.api.deleteBook(data).subscribe(
      (response:any) => {
        console.log(response);
      }
    )
  }
}
