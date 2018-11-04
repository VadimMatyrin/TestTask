import { Injectable, Inject } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Client } from '../client/client';
import { ClientTask } from '../client-task/clientTask'
import 'rxjs';

@Injectable()
export class ClientService {
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string 
  ) { }

  getClients() {
    var clients: Client[];
    return this.http.get<Client[]>(this.baseUrl + 'api/Client');
  }

}
