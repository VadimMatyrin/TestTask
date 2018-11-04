import { Component, OnInit, Inject } from '@angular/core';
import { Client } from './client';
import { HttpClient } from '@angular/common/http';
import { ClientService } from '../services/client.service';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

export class ClientsComponent implements OnInit {
  clients: Client[];
  selectedClient: Client;
  constructor(private clientService: ClientService) {
   
  }
  onSelect(client: Client): void {
    this.selectedClient = client;
  }
  ngOnInit() {
    this.clientService.getClients().subscribe(data => this.clients = data);
  }
}
