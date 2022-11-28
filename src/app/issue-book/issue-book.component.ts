import { Component } from '@angular/core';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent {

  name = ""
  title = ""
  dateOfIssue = ""
  membershipNo = ""

  readValues = () => {
    let data = {
      "name":this.name,
      "title":this.title,
      "dateOfIssue":this.dateOfIssue,
      "membershipNo":this.membershipNo
    }
    console.log(data);
    
  }
}
