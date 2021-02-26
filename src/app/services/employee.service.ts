import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/models/employee-model';
import { Observable } from 'rxjs';

// to refresh page after adding dapartment name
import { Subject } from 'rxjs';
// for deopdown list
// import { Department } from '../models/department-model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  getDepDropDownValues() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  formData: Employee;

  // readonly APIUrl = 'http://dummy.restapiexample.com/api/v1';
  readonly APIUrl = 'https://hub.dummyapis.com';

  getEmpList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.APIUrl + '/employee');
  }

  addEmployee(emp: Employee) {
    return this.http.post(this.APIUrl + '/create', emp);
  }
  deleteEmployee(id: number) {
    return this.http.delete(this.APIUrl + '/delete/' + id);
  }

  updateEmployee(emp: Employee) {
    return this.http.put(this.APIUrl + '/update',emp);
  }


  // getDepDropDownValues():Observable<any>{
  //   return this.http.get<Department[]>(this.APIUrl+'/department');
  // }


  // to refresh page after adding dapartment name
  private _listener = new Subject<any>();
  listen(): Observable<any> {
    return this._listener.asObservable();
  }

  filter(filterBy: string) {
    this._listener.next(filterBy);
  }
}
