import { Component, OnInit, Inject } from '@angular/core';
import { TicketModel } from '../../model/ticket.model';
import { StorageService } from '../../service/storage.service';
import { TicketCalculService } from '../../service/ticket-calcul.service';
import { TicketResultModel } from '../../model/ticket-result.model';

@Component({
  selector: 'app-ticket-calculator',
  templateUrl: './ticket-calculator.component.html',
  styleUrls: ['./ticket-calculator.component.css']
})
export class TicketCalculatorComponent implements OnInit {

  tickets: Array<TicketModel>;
  totalResult : number;
  ticketsResult : Array<TicketResultModel>
  total: number = 25;
  dirty: boolean = true;

  constructor( @Inject(StorageService) private storageService: StorageService,
               @Inject(TicketCalculService) private ticketCalculService: TicketCalculService) {
    this.tickets = storageService.tickets;
  }

  calc() {    
    this.ticketsResult = this.ticketCalculService.calcul(this.total,this.tickets);
    this.totalResult = this.ticketCalculService.sumResult(this.ticketsResult);    
    this.dirty = false;
  }

  change(){    
    this.calc();
    //this.dirty = true;    
  }
  

  ngOnInit() {
  }

}
