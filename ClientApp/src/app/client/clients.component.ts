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
  selectedClient: Client;
  clientCities: string[];
  selectedCity: string = '';
  clientFirstnames: string[];
  selectedFirstname: string = '';
  constructor(private clientService: ClientService) {

  }
  onSelect(client: Client): void {
    this.selectedClient = client;
  }

  onCitySelect(city: string): void {
    this.getData(city, this.selectedFirstname);
    this.selectedCity = city;
    this.selectedClient = null;
  }
  onFirstnameSelect(firstname: string): void {
    this.getData(this.selectedCity, firstname);
    this.selectedFirstname = firstname;
    this.selectedClient = null;
  }
  ngOnInit() {
    this.getInitData();
  }
  getInitData() {
    this.clientService.getClients().subscribe(data => this.bindInitData(data));
  }
  getData(city: string, firstname: string) {
    this.clientService.getClients(city, firstname).subscribe(data => this.clients = data);
  }
  bindInitData(data) {
    this.clients = data;
    this.clientCities = this.clients.map(c => c.address).filter((el, i, a) => i === a.indexOf(el));
    this.clientFirstnames = this.clients.map(c => c.firstName).filter((el, i, a) => i === a.indexOf(el));
  }
}
