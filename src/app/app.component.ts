import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
year:any
month:any
day:any

currentMonth = new Date().getMonth()+1
currentYear =new Date().getFullYear()
currentDay =new Date().getDate()
isResultShown=false
error='Please Enter the valid informations'
isErrorShowed=false


ngOnInit(): void {
//
}

showResult(){
  if(this.year<=this.currentYear && this.year>0 && this.month<=12 && this.month>0 && this.day<=31  ){
    this.isResultShown=true
    this.isErrorShowed=false

  }
  else{
     this.isErrorShowed=true
  }
}


}
