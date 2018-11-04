import { Injectable, Inject } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Client } from '../client/client';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientService {
  constructor(
    private http: HttpClient
  ) { }

  getClients(@Inject('BASE_URL') baseUrl: string) {
    var clients: Client[];
    return this.http.get<Client[]>(baseUrl + 'api/Client');
  }

  getClientTasks(@Inject('BASE_URL') baseUrl: string, id: number) {

  }
}
