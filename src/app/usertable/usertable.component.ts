
import { Component, OnInit } from '@angular/core';

import { Database, ref, set } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {

  chats!: Observable<any[]>;
  session =  sessionStorage.getItem("id");
  originalMessage$: Observable<any[]>;
  uppercaseMessage$: Observable<any[]>;



  constructor(public database: Database, private FireDb: AngularFireDatabase,private router:Router) { 
    this.chats = FireDb.list('/chat/'+ 'chatroom').valueChanges();
    this.originalMessage$ = FireDb.list('/chat/'+ 'chatroom').valueChanges();

    this.uppercaseMessage$ = this.originalMessage$.pipe(
      map((username: any) => username.toUpperCase())
      );





      // this.FireDb.object('/chat/'+ 'chatroom/20232106025501/username').valueChanges().subscribe((username: any) => {
      //   this.temporaryusername = username;
      //   console.log(this.temporaryusername)
      // });
  }

  ngOnInit(): void {
  }

chat = ""
currentuser=""



chatbox = false
listcaahtt = true


chatid =1
iid= sessionStorage.getItem('id');
chatcount=0

sendchat(value:any){

if(value.chat == null || value.chat == "" || value.chat == undefined){
alert("wala")
}else{

const date = formatDate(new Date(), 'YYYYddMMhhmmss', 'en')
const datenow = formatDate(new Date(), ' hh:mma MMM/dd/YYYY', 'en')


set(ref(this.database, 'chat/' + 'chatroom' + '/'+date), {
username: this.iid,
chat: value.chat,
touser: this.currentuser,
timesent: datenow,
id:date

});

this.chat = ""

}
}
logout(){

sessionStorage.clear();
this.router.navigate(['/login'])
}


}
