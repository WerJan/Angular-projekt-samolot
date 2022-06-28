import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamolotMalyComponent } from './samolot-maly.component';

describe('SamolotMalyComponent', () => {
  let component: SamolotMalyComponent;
  let fixture: ComponentFixture<SamolotMalyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamolotMalyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamolotMalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
