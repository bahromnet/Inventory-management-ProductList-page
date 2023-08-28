import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPermissionComponent } from './get-all-permission.component';

describe('GetAllPermissionComponent', () => {
  let component: GetAllPermissionComponent;
  let fixture: ComponentFixture<GetAllPermissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllPermissionComponent]
    });
    fixture = TestBed.createComponent(GetAllPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
