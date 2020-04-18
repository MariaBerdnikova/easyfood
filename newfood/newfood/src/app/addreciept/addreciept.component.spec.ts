import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrecieptComponent } from './addreciept.component';

describe('AddrecieptComponent', () => {
  let component: AddrecieptComponent;
  let fixture: ComponentFixture<AddrecieptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrecieptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrecieptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
