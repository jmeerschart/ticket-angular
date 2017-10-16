import { tick } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { TicketModel } from '../model/ticket.model';

@Injectable()
export class StorageService {

  tickets :  Array<TicketModel> = new Array<TicketModel>();
  
  constructor() { 
    let ticket = new TicketModel ();
    ticket.owner = "Ticket de Jean";
    ticket.value = 8;
    this.tickets.push(ticket); 

    let ticket2 = new TicketModel ();
    ticket2.owner = "Ticket de paulette";
    ticket2.value = 9;
    this.tickets.push(ticket2); 
  }

}
