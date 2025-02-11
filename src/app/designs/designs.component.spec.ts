import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesginsComponent } from './desgins.component';

describe('DesginsComponent', () => {
  let component: DesginsComponent;
  let fixture: ComponentFixture<DesginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesginsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
