import { Injectable, Inject } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Client } from '../client/client';
import { ClientTask } from '../client-task/clientTask';
import 'rxjs';

@Injectable()
export class ClientService {
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string 
  ) { }

  getClients(city: string = '', firstName: string = '') {
    return this.http.get<Client[]>(this.baseUrl + 'api/Client?' + (city === '' ? '' : 'city=' + city + '&') + (firstName === '' ? '' : 'firstName=' + firstName));
  }

}
