import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a = "muwaa"
  r = "meo"

  title = 'final-code';
  ara = "ara"
  letters!: string[];
  oneline= "";
  back!: string[];
  secondline=""
  constructor(){}
    // changing the word
//    this.letters = this.ara.split("");


//     for(let i = 0; i < this.letters.length; i++){
//       if (this.letters.length > i) {
//           if( this.letters[i]  == "a"){
//             this.letters[i] = this.a;
//           }
//           if( this.letters[i]  == "r"){
//             this.letters[i] = this.r;
//           }

      
//       }
//     }

// this.oneline = this.oneline + this.letters

// console.log(this.oneline )
// // converting back
// this.back = this.oneline.split(",");
// for(let i = 0; i < this.back.length; i++){
//   if (this.back.length > i) {
//       if( this.back[i]  == "muwaa"){
//         this.back[i] = "a";
//       }
//       if( this.back[i]  == "meo"){
//         this.back[i] = "r";
//       }

  
//   }
// }

// this.secondline = this.secondline + this.back
// console.log(this.secondline.replace(/,/g, ''))

// }

}
