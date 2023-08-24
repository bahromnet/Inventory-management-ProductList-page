import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendApplicationComponent } from './send-application.component';

describe('SendApplicationComponent', () => {
  let component: SendApplicationComponent;
  let fixture: ComponentFixture<SendApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendApplicationComponent]
    });
    fixture = TestBed.createComponent(SendApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
