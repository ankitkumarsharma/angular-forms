import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AksFormDialogComponent } from './aks-form-dialog.component';

describe('AksFormDialogComponent', () => {
  let component: AksFormDialogComponent;
  let fixture: ComponentFixture<AksFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AksFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AksFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
