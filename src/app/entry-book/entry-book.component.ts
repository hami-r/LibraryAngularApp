import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-entry-book',
  templateUrl: './entry-book.component.html',
  styleUrls: ['./entry-book.component.css']
})
export class EntryBookComponent {
  constructor(private api:ApiService) {}

    bookTitle = ""
    authorName = ""
    description = ""
    publisher = ""
    language = ""
    distributor = ""
    releasedYear = ""
    price = ""
    image = ""

    readValues = () => {
      let data = {
        "bookTitle":this.bookTitle,
        "authorName":this.authorName,
        "description":this.description,
        "publisher":this.publisher,
        "language":this.language,
        "distributor":this.distributor,
        "releasedYear":this.releasedYear,
        "price":this.price,
        "image":this.image
      }
      console.log(data);

      this.api.addBook(data).subscribe(
        (response:any) => {
          if (response.status == "success") {
            alert("Added successfully")
            this.bookTitle = ""
            this.authorName = ""
            this.description = ""
            this.publisher = ""
            this.language = ""
            this.distributor = ""
            this.releasedYear = ""
            this.price = ""
            this.image = ""
          } else {
            alert("Something went wrong")
          }
        }
      )
      
    }

}
