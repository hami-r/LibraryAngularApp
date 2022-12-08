import { Component } from '@angular/core';

@Component({
  selector: 'app-entry-book',
  templateUrl: './entry-book.component.html',
  styleUrls: ['./entry-book.component.css']
})
export class EntryBookComponent {
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
      
    }

}
