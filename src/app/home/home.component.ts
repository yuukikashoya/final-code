import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { Database, ref, set } from '@angular/fire/database';
import { AngularFireDatabase } from '@angular/fire/compat/database';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
fromdatabase=""
decoded=""
date:any
 RecordMap: Record<any, string> = {
    'A': 'muwaa',
    'B': 'meo',
    'C': 'meong',
    'D': 'miyu',
    'E': 'meow',
    'F': 'miaau',
    'G': 'miaou',
    'H': 'miau',
    'I': 'miauw',
    'J': 'ngiao1',
    'K': 'miu1',
    'L': 'miao',
    'M': 'miaow',
    'N': 'miyav',
    'O': 'miav',
    'P': 'ngiyaw',
    'Q': 'miyau',
    'R': 'meogre',
    'S': 'mjau',
    'T': 'niaou',
    'U': 'myau',
    'V': 'mjauu', 
    'W': 'ngiau', 
    'X': 'mijav', 
    'Y': 'miawj',
    'Z': 'cat',
    '1': 'qwe',
    '2': 'asd', 
    '3': 'zxc', 
    '4': 'rty', 
    '5': 'fgh',
    '6': 'vbn',
    '7': 'uio', 
    '8': 'jkl', 
    '9': 'ert', 
    '0': 'lkj',
    ' ': 'puss',
    'a': 'MUWAA',
    'b': 'MEO',
    'c': 'MEONG',
    'd': 'MIYU',
    'e': 'MEOW',
    'f': 'MIAAU',
    'g': 'MIAOU',
    'h': 'MIAU',
    'i': 'MIAUW',
    'j': 'NGIAO1',
    'k': 'MIU1',
    'l': 'MIAO',
    'm': 'MIAOW',
    'n': 'MIYAV',
    'o': 'MIAV',
    'p': 'NGIYAW',
    'q': 'MIYAU',
    'r': 'MEOGRE',
    's': 'MJAU',
    't': 'NIAOU',
    'u': 'MYAU',
    'v': 'MJAUU', 
    'w': 'NGIAU', 
    'x': 'MIJAV', 
    'y': 'MIAWJ',
    'z': 'CAT',
  
};
revisemap: Record<any, string> = {
  'muwaa': 'A',
  'meo': 'B',
  'meong': 'C',
  'miyu': 'D',
  'meow': 'E',
  'miaau': 'F',
  'miaou': 'G',
  'miau': 'H',
  'miauw': 'I',
  'ngiao1': 'J',
  'miu1': 'K',
  'miao': 'L',
  'miaow': 'M',
  'miyav': 'N',
  'miav': 'O',
  'ngiyaw': 'P',
  'miyau': 'Q',
  'meogre': 'R',
  'mjau': 'S',
  'niaou': 'T',
  'myau': 'U',
  'mjauu': 'V',
  'ngiau': 'W',
  'mijav': 'X',
  'miawj': 'Y',
  'cat': 'Z',
  'qwe': '1',
  'asd': '2',
  'zxc': '3',
  'rty': '4',
  'fgh': '5',
  'vbn': '6',
  'uio': '7',
  'jkl': '8',
  'ert': '9',
  'lkj': '0',
  'puss': ' ',
  'MUWAA': 'a',
  'MEO': 'b',
  'MEONG': 'c',
  'MIYU': 'd',
  'MEOW': 'e',
  'MIAAU': 'f',
  'MIAOU': 'g',
  'MIAU': 'h',
  'MIAUW': 'i',
  'NGIAO1': 'j',
  'MIU1': 'k',
  'MIAO': 'l',
  'MIAOW': 'm',
  'MIYAV': 'n',
  'MIAV': 'o',
  'NGIYAW': 'p',
  'MIYAU': 'q',
  'MEOGRE': 'r',
  'MJAU': 's',
  'NIAOU': 't',
  'MYAU': 'u',
  'MJAUU': 'v',
  'NGIAU': 'w',
  'MIJAV': 'x',
  'MIAWJ': 'y',
  'CAT': 'z',

};
back!: string[];
 constructor(public database: Database,private FireDb: AngularFireDatabase) { 
  
       this.FireDb.object('/secret/' + 'chatroom/chat').valueChanges().subscribe((chat: any) => {
         this.fromdatabase = chat;

    


setTimeout(() => {
  this.delayedFunction();
}, 100);

       });
       this.FireDb.object('/secret/' + 'chatroom/date').valueChanges().subscribe((d: any) => {
        this.date = d;


      });


 }
 delayedFunction() {
  this.formatText();
  this.decoded = "";  
           this.back = this.fromdatabase.split('*');
  for(let i = 0; i < this.back.length; i++){
         
    const gett = this.back[i];
    const changedchat = this.revisemap[gett];
  
    if (changedchat) {
      this.decoded += changedchat;
  
    } else {
      this.decoded += gett ;
   
    }
  }
}
chat = ""
changed: string = '';
test = "z"
sendchat() {


  const datenow = formatDate(new Date(), ' hh:mma MMM/dd/YYYY', 'en')


    set(ref(this.database, 'secret/' + 'chatroom'), {

      chat: this.chat,
      date: datenow,
      });

     this.chat = ""
   this.changed= ""
   this.formattedText

  
}
 
activesend=true
activeget = false
activehacker = false
table = false

showsend(){
  this.activesend=true
  this.activeget = false
  this.activehacker = false
  this.table = false
}
showget(){
  this.activesend=false
  this.activeget = true
  this.activehacker = false
  this.table = false
}
showhacker(){
  this.activesend=false
  this.activeget = false
  this.activehacker = true
  this.table = false
}
showtable(){
  this.activesend=false
  this.activeget = false
  this.activehacker = false
  this.table = true
}





  inputText= ''
  cattralated= ''
  updateTranslation() {
    this.cattralated = '';

    for (let i = 0; i < this.inputText.length; i++) {
      const char = this.inputText[i];
      const translatedChar = this.RecordMap[char];
      if (translatedChar) {
        this.cattralated += translatedChar + "*";
      } else {
        this.cattralated += char + "*";
      }
    }
  
  }

  copyInputValue() {
    const inputElement = document.createElement('input');
    inputElement.value = this.cattralated;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);
  }

  ngOnInit() {
  
  }

  charactersPerLine = 60;
  formattedText = ""
  formatText() {
  console.log(this.fromdatabase)
    for (let i = 0; i < this.fromdatabase.length; i += this.charactersPerLine) {
      this.formattedText += this.fromdatabase.substr(i, this.charactersPerLine) + '<br>';
    }
    this.formattedText = this.formattedText;
  }
}