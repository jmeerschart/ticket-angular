import { TicketModel } from '../model/ticket.model';
import { TestBed, inject } from '@angular/core/testing';

import { TicketCalculService } from './ticket-calcul.service';

describe('TicketCalculService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicketCalculService]
    });
  });

  it('should be created', inject([TicketCalculService], (service: TicketCalculService) => {
    expect(service).toBeTruthy();
  }));

  it('should be created', inject([TicketCalculService], (service: TicketCalculService) => {
    expect(service).toBeTruthy();
  }));
   

  it('should calc 25', inject([TicketCalculService], (service: TicketCalculService) => {
    expect(service).toBeTruthy();
    let tickets : Array<TicketModel> = new Array<TicketModel>();
    {
      let t:TicketModel = new TicketModel();
      t.value = 5;
      tickets.push(t);
    }
    expect(service.calcul(25,tickets)[0].number).toBe(5);
  }));

});
