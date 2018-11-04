import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ClientTasksComponent } from './client-task/clientTasks.component'
import { ClientsComponent } from './client/clients.component';
import { AppComponent } from './app.component';

import { ClientTasksService } from './services/client-tasks.service'
import { ClientService } from './services/client.service'


@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientTasksComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'clients', component: ClientsComponent },
    ])
  ],
  providers: [ClientService, ClientTasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
