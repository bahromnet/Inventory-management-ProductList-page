import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTypeByidComponent } from './product-type-byid.component';

describe('ProductTypeByidComponent', () => {
  let component: ProductTypeByidComponent;
  let fixture: ComponentFixture<ProductTypeByidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductTypeByidComponent]
    });
    fixture = TestBed.createComponent(ProductTypeByidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
