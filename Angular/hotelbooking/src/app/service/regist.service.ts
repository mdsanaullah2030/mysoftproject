import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrationModel } from '../model/regist.model';

@Injectable({
  providedIn: 'root'
})
export class RegistService {

baseUrl: string = "http://localhost:8080/api/registrations"

  constructor(private httpClient: HttpClient,

  ) { }

  getAllRegistration(): Observable<any> {

    return this.httpClient.get(this.baseUrl)
  }


  //update id //
  getRegistrationById(locationId: string): Observable<any> {

    return this.httpClient.get<any>(this.baseUrl + '/' + locationId);
  }


  createRegistration(location: RegistrationModel): Observable<RegistrationModel> {
    return this.httpClient.post<RegistrationModel>(this.baseUrl + "/save", location);

  }

  updateRegistration(id: string, location: RegistrationModel, image?: File): Observable<any> {

    return this.httpClient.put(this.baseUrl + '/update/' + id, location);
  }

  deleteRegistration(id: string): Observable<any> {

    return this.httpClient.delete(this.baseUrl + '/' + id);
  }
}
