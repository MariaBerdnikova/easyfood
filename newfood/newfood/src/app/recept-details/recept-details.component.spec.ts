import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptDetailsComponent } from './recept-details.component';

describe('ReceptDetailsComponent', () => {
  let component: ReceptDetailsComponent;
  let fixture: ComponentFixture<ReceptDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
