import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketManagerComponent } from './ticket-manager.component';

describe('TicketManagerComponent', () => {
  let component: TicketManagerComponent;
  let fixture: ComponentFixture<TicketManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*
  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  */
});
