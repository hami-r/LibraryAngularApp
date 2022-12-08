import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  constructor(private api:ApiService) {}

  name = ""
  adharNo = ""
  address = ""
  pincode = ""
  dob = ""
  email = ""
  phoneNo = ""
  username = ""
  password = ""
  confirmPassword = ""

  readValues = () => {
    let data = {
      "name":this.name,
      "adharNo":this.adharNo,
      "address":this.address,
      "pincode":this.pincode,
      "dob":this.dob,
      "email":this.email,
      "phoneNo":this.phoneNo,
      "username":this.username,
      "password":this.password,
      "confirmPassword":this.confirmPassword
    }
    console.log(data);
    
    this.api.addUser(data).subscribe(
      (response:any) => {
        console.log(response);
        if(this.password != this.confirmPassword){
          alert("Passwords donot match")
        } else{
          if (response.status == "success") {
            alert("User Registered successfully ")
            this.name = ""
            this.adharNo = ""
            this.address = ""
            this.pincode = ""
            this.dob = ""
            this.email = ""
            this.phoneNo = ""
            this.username = ""
            this.password = ""
            this.confirmPassword = ""
          } else {
            alert("Something went wrong")
          }
        }
        
      }
    )
  }
}
