import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamolotSredniComponent } from './samolot-sredni.component';

describe('SamolotSredniComponent', () => {
  let component: SamolotSredniComponent;
  let fixture: ComponentFixture<SamolotSredniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamolotSredniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamolotSredniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
