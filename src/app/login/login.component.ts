import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


formsignup = false
formlogin = true

showlogin(){
  this.formsignup = false
  this.formlogin = true
}
showsignup(){
this.formsignup = true
this.formlogin = false

}

}
