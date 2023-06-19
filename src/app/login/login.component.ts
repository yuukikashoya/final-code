import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Database,set,ref, onValue, update } from '@angular/fire/database';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,public database:Database) { }

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
uuid = ""
signup(value:any){

  this.uuid = "user" +Math.floor(100000 + Math.random() * 900000);
set(ref(this.database, 'user/' + value.username), {
    id: this.uuid,
    username: value.username,
    password: value.password,
   }); 
   alert("user created")
   this.formsignup = false
   this.formlogin = true
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
  userdata = ""
  name = ""
  async login(value:any){
const starCountRefclient = ref(this.database, 'user/' + value.username);
onValue(starCountRefclient, (snapshot) => {
 const cd = snapshot.val();  
this.userdata = cd.password;
this.name = cd.username;

 }); 



 await this.delay(1000);

 if (this.userdata == value.password){
  //client login
  const date = new Date();
update(ref(this.database, 'user/' + value.username),{
last_login:date,

} );
sessionStorage.setItem('id',value.username);

this.router.navigate(['/users'])
// .then(() => {
// window.location.reload();
// });
}else{
alert('wrong credential!');
}
    }
}
