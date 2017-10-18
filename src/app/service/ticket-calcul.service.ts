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

  calcul_V2(total:number,tickets : Array<TicketModel>) : Array<TicketResultModel>{
    let result:Array<TicketResultModel> = new Array<TicketResultModel>();

    let sortedTickets: Array<TicketModel> = tickets.sort((n1,n2) => n1.value - n2.value);
    //Création du resultat vide
    sortedTickets.forEach((ticket)=>{
      let tRM: TicketResultModel = new TicketResultModel();
      tRM.number = 0;
      tRM.value = ticket.value;
      tRM.owner = ticket.owner;
      result.push(tRM);
    });

    let minTicketValue:number = sortedTickets[0].value;
    if(minTicketValue <= total){
      let found = false;
      sortedTickets.forEach((ticket, i)=>{
          let rest = total % ticket.value;
          let dividende = (total - rest) / ticket.value;
          if(rest == 0){
            result[i].value = ticket.value;
            result[i].owner = ticket.owner;
            result[i].number = dividende;
            found = true;
            return false;
          }
      });
      if(found == false){
        let possibility = JSON.parse(JSON.stringify(result));
        let objectResultat = {resultat : result, possibilite :possibility};
        this.reccurCalc(objectResultat, total, 0);
        result = JSON.parse(JSON.stringify(objectResultat.possibilite));
      }
    }
    return result;
  }

  private reccurCalc(objectResultat, total:number, index:number) : boolean{
    //let initialTotal:number = total;
    let needToPay:number = total;
    objectResultat.resultat[index].number = 0;
    let toReturn:boolean = false;
    if(index < (objectResultat.resultat.length -1)){
      while(needToPay >= objectResultat.resultat[index].value){
        let ret:boolean = this.reccurCalc(objectResultat, needToPay, index +1);
        if(ret == false){
          objectResultat.resultat[index].number = objectResultat.resultat[index].number +1;
          needToPay = needToPay - objectResultat.resultat[index].value;
        }else{
          objectResultat.possibilite = JSON.parse(JSON.stringify(objectResultat.resultat));
          toReturn = true;
          break;
        }
      }
    }else{
      while(needToPay >= objectResultat.resultat[index].value){
        objectResultat.resultat[index].number = objectResultat.resultat[index].number +1;
        needToPay = needToPay - objectResultat.resultat[index].value;
      }
      if(needToPay == 0){
        objectResultat.possibilite = JSON.parse(JSON.stringify(objectResultat.resultat));
        toReturn = true;
      }
    }
    if(toReturn == false){
      if(objectResultat.possibilite == null){
        objectResultat.possibilite = JSON.parse(JSON.stringify(objectResultat.resultat));
      }else{
        if(this.sumResult(objectResultat.possibilite) < this.sumResult(objectResultat.resultat)){
          objectResultat.possibilite = JSON.parse(JSON.stringify(objectResultat.resultat));
        }
      }
      objectResultat.resultat[index].number = 0;
    }
    return toReturn;
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
