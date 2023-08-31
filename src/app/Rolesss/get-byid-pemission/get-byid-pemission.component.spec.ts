import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByidPemissionComponent } from './get-byid-pemission.component';

describe('GetByidPemissionComponent', () => {
  let component: GetByidPemissionComponent;
  let fixture: ComponentFixture<GetByidPemissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetByidPemissionComponent]
    });
    fixture = TestBed.createComponent(GetByidPemissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
