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
  clients:Client[];
  clientCities:string[];
  selectedClient: Client;
  selectedCity: string = 'Any';
  constructor(private clientService: ClientService) {

  }
  onSelect(client: Client): void {
    this.selectedClient = client;
  }

  onCitySelect(city: string): void {
    this.selectedCity = city;
    this.clientService.getClients(city).subscribe(data => this.clients = data);
    if (city === '')
      this.selectedCity = 'Any';
  }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.clientService.getClients().subscribe(data => this.bindInitData(data));
  }
  bindInitData(data) {
    this.clients = data;
    this.clientCities = this.clients.map(c => c.address).filter((el, i, a) => i === a.indexOf(el));
  }
}
