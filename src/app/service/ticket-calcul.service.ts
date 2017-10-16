import { TicketResultModel } from '../model/ticket-result.model';
import { TicketModel } from '../model/ticket.model';
import { Injectable } from '@angular/core';

@Injectable()
export class TicketCalculService {

  constructor() { }
  
  calcul(total:number,tickets : Array<TicketModel>) : Array<TicketResultModel>{
    let result:Array<TicketModel> = new Array<TicketModel>();

    let sortedTickets: Array<TicketModel> = tickets.sort((n1,n2) => n2.value - n1.value);
    
    let minOccurs:number = Math.floor(total / sortedTickets[0].value);
    let maxOccurs:number = Math.floor(total / sortedTickets[sortedTickets.length-1].value);
    let sum:number = 0;

    for (let occur:number = minOccurs; occur<maxOccurs+1;occur++){

      let ticketCombinaison:Array<TicketModel> = new Array<TicketModel>();
      //initialize array
      for (let i=0;i<occur;i++){
        let r = new TicketModel();
        r.value = sortedTickets[0].value;
        ticketCombinaison.push(r);
      }

      for(let digit:number = 0; digit<occur;digit++){
        for(let combinaison : number=0;combinaison<=digit;combinaison++){
          for(let ticketId:number=0;ticketId < sortedTickets.length;ticketId ++ ){
            let r = new TicketModel();
            r.value = sortedTickets[ticketId].value;
            ticketCombinaison[combinaison]=r;
            
            let sumCurrent:number = this.sum(ticketCombinaison);            
            if (sumCurrent<=total && sumCurrent>=sum){
              sum = sumCurrent;
              result = JSON.parse(JSON.stringify(ticketCombinaison)) ;           
            }
          }
        }
      }
    }
    return this.convertResult(result);
    //return null;
  }


  private convertResult(combinTicketsResult : Array<TicketModel>) : Array<TicketResultModel>{
    let result:Array<TicketResultModel> = new Array<TicketResultModel>();
    let tmp:Array<TicketResultModel> = new Array<TicketResultModel>();
    //let tmp = {};
    combinTicketsResult.forEach((t)=>{
      if(!tmp[t.value]){
        let r: TicketResultModel  = new TicketResultModel ();
        r.number = 1;
        r.value = t.value;
        tmp[t.value] = r;
      }else{
        tmp[t.value].number ++;
      }
    });    

    tmp.forEach((v:TicketResultModel)=>{
      if (v){
        result.push(v);
      }
    });    

    return result.sort((n1,n2) => n2.value - n1.value);
  } 


  public sum( ticketCombinaison:Array<TicketModel>) : number{
    let total:number = 0;
    ticketCombinaison.forEach(ticket=>{
      total+=ticket.value;
    });
    return total;
  }

  public sumResult( ticketCombinaison:Array<TicketResultModel>) : number{
    let total:number = 0;
    ticketCombinaison.forEach(ticket=>{
      total+=( ticket.number * ticket.value );
    });
    return total;
  }

}
