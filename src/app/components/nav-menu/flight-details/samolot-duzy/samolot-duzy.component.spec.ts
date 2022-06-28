import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamolotDuzyComponent } from './samolot-duzy.component';

describe('SamolotDuzyComponent', () => {
  let component: SamolotDuzyComponent;
  let fixture: ComponentFixture<SamolotDuzyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamolotDuzyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamolotDuzyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
