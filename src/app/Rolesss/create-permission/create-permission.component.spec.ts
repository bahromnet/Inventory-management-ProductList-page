import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePermissionComponent } from './create-permission.component';

describe('CreatePermissionComponent', () => {
  let component: CreatePermissionComponent;
  let fixture: ComponentFixture<CreatePermissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePermissionComponent]
    });
    fixture = TestBed.createComponent(CreatePermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
