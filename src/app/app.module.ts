import { FormsModule } from '@angular/forms';
import { StorageService } from './service/storage.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { RouterModule }   from '@angular/router';
import { TicketManagerComponent } from './ticket/ticket-manager/ticket-manager.component';
import { TicketCalculatorComponent } from './ticket/ticket-calculator/ticket-calculator.component';
import { HomeComponent } from './home/home/home.component';
import { TicketCalculService } from './service/ticket-calcul.service';



@NgModule({
  declarations: [    
    AppComponent,
    NavComponent,
    TicketManagerComponent,
    TicketCalculatorComponent,
    HomeComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([{
        path: '',
        redirectTo : 'home',
        pathMatch: 'full'
      },{
        path: 'home',
        component: HomeComponent
      },{
        path: 'ticket-manager',
        component: TicketManagerComponent
      },{
        path: 'ticket-calculator',
        component: TicketCalculatorComponent
      }
    ])
  ],
  providers: [StorageService,TicketCalculService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}

