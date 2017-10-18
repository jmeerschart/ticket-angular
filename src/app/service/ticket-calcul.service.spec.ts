import { TicketModel } from '../model/ticket.model';
import { TicketResultModel } from '../model/ticket-result.model';
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

  
  it('should calc_V2 25', inject([TicketCalculService], (service: TicketCalculService) => {
    expect(service).toBeTruthy();
    let tickets : Array<TicketModel> = new Array<TicketModel>();
    {
      let t:TicketModel = new TicketModel();
      t.value = 5;
      tickets.push(t);
    }
    let result:Array<TicketResultModel> = service.calcul_V2(25,tickets);
    expect(result[0].number).toBe(5);
  }));

  
  it('should calc_V2 t9 - t8 - total 72', inject([TicketCalculService], (service: TicketCalculService) => {
    expect(service).toBeTruthy();
    let tickets : Array<TicketModel> = new Array<TicketModel>();
    {
      let t:TicketModel = new TicketModel();
      t.value = 9;
      tickets.push(t);
      t = new TicketModel();
      t.value = 8;
      tickets.push(t);
    }
    let total:number = 72;
    let result:Array<TicketResultModel> = service.calcul_V2(total,tickets);
    expect(result[0].number).toBe( total / result[0].value );
  }));

  
  it('should calc_V2 t9 - t8 - total 73', inject([TicketCalculService], (service: TicketCalculService) => {
    expect(service).toBeTruthy();
    let tickets : Array<TicketModel> = new Array<TicketModel>();
    {
      let t:TicketModel = new TicketModel();
      t.value = 9;
      tickets.push(t);
      t = new TicketModel();
      t.value = 8;
      tickets.push(t);
    }
    let total:number = 73;
    let result:Array<TicketResultModel> = service.calcul_V2(total,tickets);
    if(result[0].value == 9){
      expect(result[0].number).toBe( 1 );
      expect(result[1].number).toBe( 8 );
    }else{
      expect(result[0].number).toBe( 8 );
      expect(result[1].number).toBe( 1 );
    }
    
  }));
  
  it('should calc_V2 t9 - t8 - total 17', inject([TicketCalculService], (service: TicketCalculService) => {
    expect(service).toBeTruthy();
    let tickets : Array<TicketModel> = new Array<TicketModel>();
    {
      let t:TicketModel = new TicketModel();
      t.value = 9;
      tickets.push(t);
      t = new TicketModel();
      t.value = 8;
      tickets.push(t);
    }
    let total:number = 17;
    let result:Array<TicketResultModel> = service.calcul_V2(total,tickets);
   
    
    expect(result[0].number).toBe( 1 );
    expect(result[1].number).toBe( 1 );
  }));
  
  it('should calc_V2 t9 - t8 - total 0', inject([TicketCalculService], (service: TicketCalculService) => {
    expect(service).toBeTruthy();
    let tickets : Array<TicketModel> = new Array<TicketModel>();
    {
      let t:TicketModel = new TicketModel();
      t.value = 9;
      tickets.push(t);
      t = new TicketModel();
      t.value = 8;
      tickets.push(t);
    }
    let total:number = 0;
    let result:Array<TicketResultModel> = service.calcul_V2(total,tickets);
   
    
    expect(result[0].number).toBe( 0 );
    expect(result[1].number).toBe( 0 );
  }));
  
  
  it('should calc_V2 t9 - t8 - total 7', inject([TicketCalculService], (service: TicketCalculService) => {
    expect(service).toBeTruthy();
    let tickets : Array<TicketModel> = new Array<TicketModel>();
    {
      let t:TicketModel = new TicketModel();
      t.value = 9;
      tickets.push(t);
      t = new TicketModel();
      t.value = 8;
      tickets.push(t);
    }
    let total:number = 7;
    let result:Array<TicketResultModel> = service.calcul_V2(total,tickets);
   
    
    expect(result[0].number).toBe( 0 );
    expect(result[1].number).toBe( 0 );
  }));

});
