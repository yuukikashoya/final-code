
import { Component, OnInit } from '@angular/core';
import {  AngularFireDatabase } from '@angular/fire/compat/database';
import { Database,} from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  account!: Observable<any[]>;

  session =  sessionStorage.getItem("id");


  constructor(public database: Database, private FireDb: AngularFireDatabase) { 

    this.account = FireDb.list('/user').valueChanges();
  }

  ngOnInit(): void {
  }

}
