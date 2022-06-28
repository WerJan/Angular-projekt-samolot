import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-samolot-maly',
  templateUrl: './samolot-maly.component.html',
  styleUrls: ['./samolot-maly.component.scss']
})
export class SamolotMalyComponent implements OnInit {

toggle = true;
status = 'Enable'; 
toggle1 = true;
status1 = 'Enable'; 
toggle2 = true;
status2 = 'Enable';
toggle3 = true;
status3 = 'Enable';
toggle4 = true;
status4 = 'Enable';
toggle5 = true;
status5 = 'Enable';
toggle6 = true;
status6 = 'Enable';
toggle7 = true;
status7 = 'Enable';
toggle8 = true;
status8 = 'Enable';
toggle9 = true;
status9 = 'Enable';
toggle10 = true;
status10= 'Enable';
toggle11 = true;
status11 = 'Enable';
toggle12 = true;
status12 = 'Enable';
toggle13 = true;
status13 = 'Enable';
toggle14 = true;
status14 = 'Enable';
toggle15 = true;
status15 = 'Enable';
toggle16 = true;
status16 = 'Enable';
toggle17 = true;
status17 = 'Enable';
toggle18 = true;
status18 = 'Enable';
toggle19 = true;
status19 = 'Enable';
toggle20 = true;
status20 = 'Enable';
toggle21 = true;
status21 = 'Enable';
toggle22 = true;
status22 = 'Enable';
toggle23 = true;
status23 = 'Enable';
toggle24 = true;
status24 = 'Enable';
toggle25 = true;
status25 = 'Enable';
toggle26 = true;
status26 = 'Enable';


showDiv = {
        A1 : false,
        A2 : false,
        A3 : false,
        A4 : false,
        A5 : false,
        A6 : false,
        A7 : false,
        A8 : false,
        A9 : false,
        A10 : false,
        A11 : false,
        A12 : false,
        A13 : false,
        A14 : false,
        A15 : false,
        A16 : false,
        A17 : false,
        A18 : false,
        A19 : false,
        A20 : false,
        A21 : false,
        A22 : false,
        A23 : false,
        A24 : false,
        A25 : false,
        A26 : false,
        A27 : false,
}
  constructor(private router:Router,) {}

  ngOnInit(): void {
  }


enableDisableRule() {
  this.toggle = !this.toggle;
  this.status = this.toggle ? 'Enable' : 'Disable';

}
enableDisableRule1() {
  this.toggle1 = !this.toggle1;
  this.status = this.toggle1 ? 'Enable' : 'Disable';
}
enableDisableRule2() {
  this.toggle2 = !this.toggle2
  this.status = this.toggle2 ? 'Enable' : 'Disable';
}
enableDisableRule3() {
  this.toggle3 = !this.toggle3;
  this.status = this.toggle3 ? 'Enable' : 'Disable';
}
enableDisableRule4() {
  this.toggle4 = !this.toggle4;
  this.status = this.toggle4 ? 'Enable' : 'Disable';
}
enableDisableRule5() {
  this.toggle5 = !this.toggle5;
  this.status = this.toggle5 ? 'Enable' : 'Disable';
}
enableDisableRule6() {
  this.toggle6 = !this.toggle6;
  this.status = this.toggle6 ? 'Enable' : 'Disable';
}
enableDisableRule7() {
  this.toggle7 = !this.toggle7;
  this.status = this.toggle7 ? 'Enable' : 'Disable';
}
enableDisableRule8() {
  this.toggle8 = !this.toggle8;
  this.status = this.toggle8 ? 'Enable' : 'Disable';
}
enableDisableRule9() {
  this.toggle9 = !this.toggle9;
  this.status = this.toggle9 ? 'Enable' : 'Disable';
}
enableDisableRule10() {
  this.toggle10 = !this.toggle10;
  this.status = this.toggle10 ? 'Enable' : 'Disable';
}
enableDisableRule11() {
  this.toggle11 = !this.toggle11;
  this.status = this.toggle11 ? 'Enable' : 'Disable';
}
enableDisableRule12() {
  this.toggle12 = !this.toggle12;
  this.status = this.toggle12 ? 'Enable' : 'Disable';
}
enableDisableRule13() {
  this.toggle13 = !this.toggle13;
  this.status = this.toggle13 ? 'Enable' : 'Disable';
}
enableDisableRule14() {
  this.toggle14 = !this.toggle14;
  this.status = this.toggle14 ? 'Enable' : 'Disable';
}
enableDisableRule15() {
  this.toggle15 = !this.toggle15;
  this.status = this.toggle15 ? 'Enable' : 'Disable';
}
enableDisableRule16() {
  this.toggle16 = !this.toggle16;
  this.status = this.toggle16 ? 'Enable' : 'Disable';
}
enableDisableRule17() {
  this.toggle17 = !this.toggle17;
  this.status = this.toggle17 ? 'Enable' : 'Disable';
}
enableDisableRule18() {
  this.toggle18 = !this.toggle18;
  this.status = this.toggle18 ? 'Enable' : 'Disable';
}
enableDisableRule19() {
  this.toggle19 = !this.toggle19;
  this.status = this.toggle19 ? 'Enable' : 'Disable';
}
enableDisableRule20() {
  this.toggle20 = !this.toggle20;
  this.status = this.toggle20 ? 'Enable' : 'Disable';
}
enableDisableRule21() {
  this.toggle21 = !this.toggle21;
  this.status = this.toggle21 ? 'Enable' : 'Disable';
}
enableDisableRule22() {
  this.toggle22 = !this.toggle22;
  this.status = this.toggle22 ? 'Enable' : 'Disable';
}
enableDisableRule23() {
  this.toggle23 = !this.toggle23;
  this.status = this.toggle23 ? 'Enable' : 'Disable';
}
enableDisableRule24() {
  this.toggle24 = !this.toggle24;
  this.status = this.toggle24 ? 'Enable' : 'Disable';
}
enableDisableRule25() {
  this.toggle25 = !this.toggle25;
  this.status = this.toggle25 ? 'Enable' : 'Disable';
}
enableDisableRule26() {
  this.toggle26 = !this.toggle26;
  this.status = this.toggle26 ? 'Enable' : 'Disable';
}

    

}
  

