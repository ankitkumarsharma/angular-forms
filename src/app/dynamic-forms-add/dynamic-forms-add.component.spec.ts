import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormsAddComponent } from './dynamic-forms-add.component';

describe('DynamicFormsAddComponent', () => {
  let component: DynamicFormsAddComponent;
  let fixture: ComponentFixture<DynamicFormsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
