import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../client/client';
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
  private _client: Client;

  get client(): Client {
    return this._client;
  }
  @Input()
  set client(client: Client) {
    this._client = client;
    this.updateData();
  }
  clientTasks:ClientTask[];
  constructor(private clientTasksService: ClientTasksService) {

  }
  onSelect(clientTask: ClientTask): void {
    this.clientTasksService.deleteClientTask(clientTask.id).subscribe(data => this.updateData());
  }

  updateData() {
    this.clientTasksService.getClientTasks(this._client.id).subscribe(data => this.clientTasks = data);
  }
}

