import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPurchaseComponent } from './detail-purchase.component';

describe('DetailComponent', () => {
  let component: DetailPurchaseComponent;
  let fixture: ComponentFixture<DetailPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPurchaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
