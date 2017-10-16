import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCalculatorComponent } from './ticket-calculator.component';

describe('TicketCalculatorComponent', () => {
  let component: TicketCalculatorComponent;
  let fixture: ComponentFixture<TicketCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*
  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  */
});
