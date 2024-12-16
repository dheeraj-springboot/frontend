import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DeliveryRequest, DeliveryResponse } from '../api-models';

// Interfaces


@Injectable({
  providedIn: 'root',
})
export class SecondscriptService {
  private apiUrl = 'http://localhost:5210/Asintool'; // Update with your .NET API URL

  constructor(private http: HttpClient) {}

  // API call to fetch delivery days
  getDeliveryDays(request: DeliveryRequest): Observable<DeliveryResponse> {
    return this.http.post<DeliveryResponse>(this.apiUrl, request, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
}
