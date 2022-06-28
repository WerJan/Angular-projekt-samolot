import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
}
idzdo(){
  this.router.navigate([""])
  }

  call1(){
    this.router.navigate(["/current-date"])
  }

  call2(){
    this.router.navigate(["flight-details/samolot-sredni"])
  }

  call3(){
    this.router.navigate(["flight-details/samolot-duzy"])
  }

}
  
