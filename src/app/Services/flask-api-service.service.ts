// flask-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiRequest, ApiResponse } from '../api-models';
//import { ApiRequest, ApiResponse } from './models';

@Injectable({
  providedIn: 'root'
})
export class FlaskApiService {
  private apiUrl = 'http://localhost:5210/api/Api/callFlaskApi'; // Replace with your .NET API URL

  constructor(private http: HttpClient) {}

  // Method to call the .NET API
  callFlaskApi(request: ApiRequest): Observable<ApiResponse> {
    console.log(request);
    return this.http.post<ApiResponse>(this.apiUrl, request);
  }
}
