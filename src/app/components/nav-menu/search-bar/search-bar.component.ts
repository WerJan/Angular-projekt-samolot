import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {
  
Date1 : Date = new Date();


  date7!: Date;
  constructor(private router:Router,
              
              ) 
              {}
  ngOnInit(): void {
    
  }

  idzdo(){
    this.router.navigate(["/flight-details"]) 
  };

  pokazDate(){
    alert(Date());
    console.log( "rok " + this.Date1.getUTCFullYear())
  }

  DzisiejszyDzien(){
    return this.Date1.getUTCDate()
  }
  DzisiejszyMiesiac(){
    return this.Date1.getUTCMonth() +1
  }
  DzisiejszyRok(){
    return this.Date1.getUTCFullYear()
  }


};

  
    



