import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingradientsComponent } from './addingradients.component';

describe('AddingradientsComponent', () => {
  let component: AddingradientsComponent;
  let fixture: ComponentFixture<AddingradientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingradientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingradientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
