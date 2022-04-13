import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsOperationsComponent } from './buttons-operations.component';

describe('ButtonsOperationsComponent', () => {
  let component: ButtonsOperationsComponent;
  let fixture: ComponentFixture<ButtonsOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
