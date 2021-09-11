import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {retry} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {IEmployee} from '../models/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }

  public fetchAllEmployees():Observable<IEmployee[]>{
    let dataURL:string = `https://gist.githubusercontent.com/KOLAMANIKANTA/896ab1da4400c815704928e027d8cc98/raw/537784a2ed8b77a756a5bb74ccea4267a6fb8fef/employees.json`;
    return this.httpClient.get<IEmployee[]>(dataURL).pipe(
      retry(1)
    );
  }
}
