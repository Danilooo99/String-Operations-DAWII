import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Textarea1Component } from './textarea1.component';

describe('Textarea1Component', () => {
  let component: Textarea1Component;
  let fixture: ComponentFixture<Textarea1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Textarea1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Textarea1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
