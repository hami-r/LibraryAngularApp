import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent {
  constructor(private api:ApiService) {}
  name = ""
  bookTitle = ""
  dateOfIssue = ""
  membershipNo = ""

  readValues = () => {
    let data = {
      "name":this.name,
      "bookTitle":this.bookTitle,
      "dateOfIssue":this.dateOfIssue,
      "membershipNo":this.membershipNo
    }
    console.log(data);
    
    this.api.issueBook(data).subscribe(
      (response:any) => {
        if(response.status == "success"){
          alert("Issued successfully")
          this.name = ""
          this.bookTitle = ""
          this.dateOfIssue = ""
          this.membershipNo = ""
        } else {
          alert("Something went wrong")
        }
      }
    )
  }
}
