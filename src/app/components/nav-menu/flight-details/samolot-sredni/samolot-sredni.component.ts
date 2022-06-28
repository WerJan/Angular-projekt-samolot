import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-samolot-sredni',
  templateUrl: './samolot-sredni.component.html',
  styleUrls: ['./samolot-sredni.component.scss']
})
export class SamolotSredniComponent implements OnInit {

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
toggle27 = true;
status27 = 'Enable';
toggle28 = true;
status28 = 'Enable';
toggle29 = true;
status29 = 'Enable';
toggle30 = true;
status30 = 'Enable';
toggle31 = true;
status31 = 'Enable';
toggle32 = true;
status32 = 'Enable';
toggle33 = true;
status33 = 'Enable';
toggle34 = true;
status34 = 'Enable';
toggle35 = true;
status35 = 'Enable';
toggle36 = true;
status36 = 'Enable';
toggle37 = true;
status37 = 'Enable';
toggle38 = true;
status38 = 'Enable';
toggle39 = true;
status39 = 'Enable';
toggle40 = true;
status40 = 'Enable';
toggle41 = true;
status41 = 'Enable';
toggle42 = true;
status42 = 'Enable';
toggle43 = true;
status43 = 'Enable';
toggle44 = true;
status44 = 'Enable';
toggle45 = true;
status45 = 'Enable';
toggle46 = true;
status46 = 'Enable';
toggle47 = true;
status47 = 'Enable';
toggle48 = true;
status48 = 'Enable';
toggle49 = true;
status49 = 'Enable';
toggle50 = true;
status50 = 'Enable';
toggle51 = true;
status51 = 'Enable';
toggle52 = true;
status52 = 'Enable';
toggle53 = true;
status53 = 'Enable';
toggle54 = true;
status54 = 'Enable';
toggle55 = true;
status55 = 'Enable';
toggle56 = true;
status56 = 'Enable';
toggle57 = true;
status57 = 'Enable';
toggle58 = true;
status58 = 'Enable';
toggle59 = true;
status59 = 'Enable';
toggle60 = true;
status60 = 'Enable';
toggle61 = true;
status61 = 'Enable';
toggle62 = true;
status62 = 'Enable';
toggle63 = true;
status63 = 'Enable';
toggle64 = true;
status64 = 'Enable';
toggle65 = true;
status65 = 'Enable';
toggle66 = true;
status66 = 'Enable';
toggle67 = true;
status67 = 'Enable';
toggle68 = true;
status68 = 'Enable';
toggle69 = true;
status69 = 'Enable';
toggle70 = true;
status70 = 'Enable';
toggle71 = true;
status71 = 'Enable';
toggle72 = true;
status72 = 'Enable';
toggle73 = true;
status73 = 'Enable';


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
        A28 : false,
        A29 : false,
        A30 : false,
        A31 : false,
        A32 : false,
        A33 : false,
        A34 : false,
        A35 : false,
        A36 : false,
        A37 : false,
        A38 : false,
        A39 : false,
        A40 : false,
        A41 : false,
        A42 : false,
        A43 : false,
        A44 : false,
        A45 : false,
        A46 : false,
        A47 : false,
        A48 : false,
        A49 : false,
        A50 : false,
        A51 : false,
        A52 : false,
        A53 : false,
        A54 : false,
        A55 : false,
        A56 : false,
        A57 : false,
        A58 : false,
        A59 : false,
        A60 : false,
        A61 : false,
        A62 : false,
        A63 : false,
        A64 : false,
        A65 : false,
        A66 : false,
        A67 : false,
        A68 : false,
        A69 : false,
        A70 : false,
        A71 : false,
        A72 : false,
        A73 : false,

}



  constructor(private router:Router) { }

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

  enableDisableRule27() {
    this.toggle27 = !this.toggle27;
    this.status = this.toggle27 ? 'Enable' : 'Disable';
  }

    enableDisableRule28() {
      this.toggle28 = !this.toggle28;
      this.status = this.toggle28 ? 'Enable' : 'Disable';
    }

      enableDisableRule29() {
        this.toggle29 = !this.toggle29;
        this.status = this.toggle29 ? 'Enable' : 'Disable';
      }

        enableDisableRule30() {
          this.toggle30 = !this.toggle30;
          this.status = this.toggle30 ? 'Enable' : 'Disable';
        }

          enableDisableRule31() {
            this.toggle31 = !this.toggle31;
            this.status = this.toggle31 ? 'Enable' : 'Disable';
          }

            enableDisableRule32() {
              this.toggle32 = !this.toggle32;
              this.status = this.toggle32 ? 'Enable' : 'Disable';
            }
              
        enableDisableRule33() {
          this.toggle33 = !this.toggle33;
          this.status = this.toggle33 ? 'Enable' : 'Disable';
        }
          
        enableDisableRule34() {
          this.toggle34 = !this.toggle34;
          this.status = this.toggle34 ? 'Enable' : 'Disable';
        }
          
        enableDisableRule35() {
          this.toggle35 = !this.toggle35;
          this.status = this.toggle35 ? 'Enable' : 'Disable';
        }
          
        enableDisableRule36() {
          this.toggle36 = !this.toggle36;
          this.status = this.toggle36 ? 'Enable' : 'Disable';
        }
          
        enableDisableRule37() {
          this.toggle37 = !this.toggle37;
          this.status = this.toggle37 ? 'Enable' : 'Disable';
        }
          
        enableDisableRule38() {
          this.toggle38 = !this.toggle38;
          this.status = this.toggle38 ? 'Enable' : 'Disable';
        }
          
        enableDisableRule39() {
          this.toggle39 = !this.toggle39;
          this.status = this.toggle39 ? 'Enable' : 'Disable';
        }
          
        enableDisableRule40() {
          this.toggle40 = !this.toggle40;
          this.status = this.toggle40 ? 'Enable' : 'Disable';
        }
          
        enableDisableRule41() {
          this.toggle41 = !this.toggle41;
          this.status = this.toggle41 ? 'Enable' : 'Disable';
        }
          
        enableDisableRule42() {
          this.toggle42 = !this.toggle42;
          this.status = this.toggle42 ? 'Enable' : 'Disable';
        }
          
        enableDisableRule43() {
          this.toggle43 = !this.toggle43;
          this.status = this.toggle30 ? 'Enable' : 'Disable';
          
        }
        enableDisableRule44() {
          this.toggle44 = !this.toggle44;
          this.status = this.toggle44 ? 'Enable' : 'Disable';
        }
          
        enableDisableRule45() {
          this.toggle45 = !this.toggle45;
          this.status = this.toggle45 ? 'Enable' : 'Disable';
        }

        enableDisableRule46() {
          this.toggle46 = !this.toggle46;
          this.status = this.toggle46 ? 'Enable' : 'Disable';
        }

          enableDisableRule47() {
            this.toggle47 = !this.toggle47;
            this.status = this.toggle47 ? 'Enable' : 'Disable';
          }
          enableDisableRule48() {
            this.toggle48 = !this.toggle48;
            this.status = this.toggle48 ? 'Enable' : 'Disable';
          }
          enableDisableRule49() {
            this.toggle49 = !this.toggle49;
            this.status = this.toggle49 ? 'Enable' : 'Disable';
          }
          enableDisableRule50() {
            this.toggle50 = !this.toggle50;
            this.status = this.toggle50 ? 'Enable' : 'Disable';
          }
          enableDisableRule51() {
            this.toggle51 = !this.toggle51;
            this.status = this.toggle51 ? 'Enable' : 'Disable';
          }
          enableDisableRule52() {
            this.toggle52 = !this.toggle52;
            this.status = this.toggle52 ? 'Enable' : 'Disable';
          }
          enableDisableRule53() {
            this.toggle53 = !this.toggle53;
            this.status = this.toggle53 ? 'Enable' : 'Disable';
          }
          enableDisableRule54() {
            this.toggle54 = !this.toggle54;
            this.status = this.toggle54 ? 'Enable' : 'Disable';
          }
          enableDisableRule55() {
            this.toggle55 = !this.toggle55;
            this.status = this.toggle55 ? 'Enable' : 'Disable';
          }
          enableDisableRule56() {
            this.toggle56 = !this.toggle56;
            this.status = this.toggle56 ? 'Enable' : 'Disable';
          }
          enableDisableRule57() {
            this.toggle57 = !this.toggle57;
            this.status = this.toggle57 ? 'Enable' : 'Disable';
          }
          enableDisableRule58() {
            this.toggle58 = !this.toggle58;
            this.status = this.toggle58 ? 'Enable' : 'Disable';
          }
          enableDisableRule59() {
            this.toggle59 = !this.toggle59;
            this.status = this.toggle59 ? 'Enable' : 'Disable';
          }
          enableDisableRule60() {
            this.toggle60 = !this.toggle60;
            this.status = this.toggle60 ? 'Enable' : 'Disable';
          }
          enableDisableRule61() {
            this.toggle61 = !this.toggle61;
            this.status = this.toggle61 ? 'Enable' : 'Disable';
          }
          enableDisableRule62() {
            this.toggle62 = !this.toggle62;
            this.status = this.toggle62 ? 'Enable' : 'Disable';
          }
          enableDisableRule63() {
            this.toggle63 = !this.toggle63;
            this.status = this.toggle63 ? 'Enable' : 'Disable';
          }
          enableDisableRule64() {
            this.toggle48 = !this.toggle64;
            this.status = this.toggle64 ? 'Enable' : 'Disable';
          }
          enableDisableRule65() {
            this.toggle65 = !this.toggle65;
            this.status = this.toggle65 ? 'Enable' : 'Disable';
          }
          enableDisableRule66() {
            this.toggle66 = !this.toggle66;
            this.status = this.toggle66 ? 'Enable' : 'Disable';
          }
          enableDisableRule67() {
            this.toggle67 = !this.toggle67;
            this.status = this.toggle67 ? 'Enable' : 'Disable';
          }
          enableDisableRule68() {
            this.toggle68 = !this.toggle68;
            this.status = this.toggle68 ? 'Enable' : 'Disable';
          }
          enableDisableRule69() {
            this.toggle69 = !this.toggle69;
            this.status = this.toggle69 ? 'Enable' : 'Disable';
          }
          enableDisableRule70() {
            this.toggle70 = !this.toggle70;
            this.status = this.toggle70 ? 'Enable' : 'Disable';
          }
          enableDisableRule71() {
            this.toggle71 = !this.toggle71;
            this.status = this.toggle71 ? 'Enable' : 'Disable';
          }
          enableDisableRule72() {
            this.toggle72 = !this.toggle72;
            this.status = this.toggle72 ? 'Enable' : 'Disable';
          }
        }
      


