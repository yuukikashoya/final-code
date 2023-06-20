
import { Component, OnInit } from '@angular/core';
import {  AngularFireDatabase } from '@angular/fire/compat/database';
import { Database, ref, set,} from '@angular/fire/database';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {

  chats!: Observable<any[]>;
  session =  sessionStorage.getItem("id");


  constructor(public database: Database, private FireDb: AngularFireDatabase,private router:Router) { 
    this.chats = FireDb.list('/chat/'+ 'chatroom').valueChanges();
 
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
