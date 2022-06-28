import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {CalendarModule} from 'primeng/calendar';

@Component({
  selector: 'app-current-date',
  templateUrl: './current-date.component.html',
  styleUrls: ['./current-date.component.scss']
})
export class CurrentDAteComponent implements OnInit {

  div1:boolean=true;
    div2:boolean=true;
    div3:boolean=true;

  constructor() { }

  ngOnInit(): void {
    
  }

  div1Function(){
    this.div1=true;
    this.div2=false;
    this.div3=false
}

div2Function(){
    this.div2=true;
    this.div1=false;
    this.div3=false
}

div3Function(){
    this.div3=true;
    this.div2=false;
    this.div1=false
}

}
