import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit {

  constructor(private router:Router,
    ) { }

  ngOnInit(): void {}
    
  

  idzdo(){
    this.router.navigate(["/log"]) 
  };

  call1(){
    this.router.navigate(["flight-details/samolot-maly"])
  }

  call2(){
    this.router.navigate(["flight-details/samolot-sredni"])
  }

  call3(){
    this.router.navigate(["flight-details/samolot-duzy"])
  }
  
} 
