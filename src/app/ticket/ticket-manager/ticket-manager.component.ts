import { Component, Inject, OnInit } from '@angular/core';
import { TicketModel } from '../../model/ticket.model';
import { StorageService } from '../../service/storage.service';

@Component({
  selector: 'app-ticket-manager',
  templateUrl: './ticket-manager.component.html',
  styleUrls: ['./ticket-manager.component.css']
})
export class TicketManagerComponent implements OnInit {

  tickets : Array<TicketModel>;
  constructor(@Inject(StorageService) private storageService: StorageService) {
    this.tickets = storageService.tickets;
   }

  ngOnInit() {
  }

  
  addTicket(){
    const ticket = new TicketModel();
    ticket.owner='';    
    this.tickets.push(ticket);
  }

  deleteTicket(ticket){
    this.tickets = this.tickets.filter(item => item !== ticket);
  }
}

