import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(
    private http:HttpClient
  ){ }

  //get movies
  getApi(): Observable<any>{
    return this.http.get('https://ghibliapi.herokuapp.com/films/');
  }
}