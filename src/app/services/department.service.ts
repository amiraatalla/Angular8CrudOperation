import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from 'src/app/models/department-model';
import { Observable } from 'rxjs';

// to refresh page after adding dapartment name
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(private http: HttpClient) {}

  formData: Department;

  readonly APIUrl = 'https://hub.dummyapis.com/vj';

  getDepList(): Observable<Department[]> {
    return this.http.get<Department[]>(this.APIUrl + '/h1lxLqN');
  }

  addDepartment(dep: Department) {
    return this.http.post(this.APIUrl + '/h1lxLqN', dep);
  }
  deleteDepartment(id: number) {
    return this.http.delete(this.APIUrl + '/h1lxLqN/' + id);
  }

  updateDepartment(dep: Department) {
    return this.http.put(this.APIUrl + '/h1lxLqN' , dep);
  }

  // to refresh page after adding dapartment name
  private _listener = new Subject<any>();
  listen(): Observable<any> {
    return this._listener.asObservable();
  }

  filter(filterBy: string) {
    this._listener.next(filterBy);
  }
}
