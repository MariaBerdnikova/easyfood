import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullRecieptComponent } from './full-reciept.component';

describe('FullRecieptComponent', () => {
  let component: FullRecieptComponent;
  let fixture: ComponentFixture<FullRecieptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullRecieptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullRecieptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
