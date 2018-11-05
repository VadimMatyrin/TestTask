import { Component, OnInit, Input } from '@angular/core';
import { ClientTask } from './clientTask';
import { HttpClient } from '@angular/common/http';
import { ClientTasksService } from '../services/client-tasks.service';
import { List } from 'linqts';

@Component({
  selector: 'app-client-tasks',
  templateUrl: './client-tasks.component.html',
  styleUrls: ['./client-tasks.component.css'],
  providers: [ClientTasksService]
})

export class ClientTasksComponent{
  private _clientId: number;

  get clientId(): number {
    return this._clientId;
  }
  @Input()
  set clientId(clientId: number) {
    this._clientId = clientId;
    this.updateData();
  }
  clientTasks = new List<ClientTask>();
  constructor(private clientTasksService: ClientTasksService) {

  }
  onSelect(clientTask: ClientTask): void {
    this.clientTasksService.deleteClientTask(clientTask.id).subscribe(data => this.updateData());
  }

  updateData() {
    this.clientTasksService.getClientTasks(this._clientId).subscribe(data => this.clientTasks = data);
  }
}

