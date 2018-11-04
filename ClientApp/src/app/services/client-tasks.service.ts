import { Injectable, Inject } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Client } from '../client/client';
import { ClientTask } from '../client-task/clientTask'
import 'rxjs';

@Injectable()
export class ClientTasksService {
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) { }

  getTasks() {
    return this.http.get<ClientTask[]>(this.baseUrl + 'api/ClientTasks');
  }

  getClientTasks(id: number) {
    return this.http.get<ClientTask[]>(this.baseUrl + 'api/ClientTasks/GetClientsTasks/' + id);
  }

  deleteClientTask(id: number) {
    return this.http.delete(this.baseUrl + 'api/ClientTasks/' + id);
  }
}
