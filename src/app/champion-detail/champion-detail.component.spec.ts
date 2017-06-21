import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamptionDetailComponent } from './champion-detail.component';

describe('ChamptionDetailComponent', () => {
  let component: ChamptionDetailComponent;
  let fixture: ComponentFixture<ChamptionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamptionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamptionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
