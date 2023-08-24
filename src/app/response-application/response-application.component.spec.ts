import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseApplicationComponent } from './response-application.component';

describe('ResponseApplicationComponent', () => {
  let component: ResponseApplicationComponent;
  let fixture: ComponentFixture<ResponseApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponseApplicationComponent]
    });
    fixture = TestBed.createComponent(ResponseApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
