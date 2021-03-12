import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AksConfirmDialogComponent } from './aks-confirm-dialog.component';

describe('AksConfirmDialogComponent', () => {
  let component: AksConfirmDialogComponent;
  let fixture: ComponentFixture<AksConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AksConfirmDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AksConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
