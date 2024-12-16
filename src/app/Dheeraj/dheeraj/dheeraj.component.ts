import { Component } from '@angular/core';
import { FlaskApiService } from '../../Services/flask-api-service.service';
import { ApiRequest, ApiResponse } from '../../api-models';

@Component({
  selector: 'app-dheeraj',
  templateUrl: './dheeraj.component.html',
  styleUrl: './dheeraj.component.css'
})
export class DheerajComponent {
  code: string = '';
  result: number | null = null;
  errorMessage: string = '';

  constructor(private flaskApiService: FlaskApiService) {}

  // Method to call Flask API via .NET API
  callApi() {
    const request: ApiRequest = { code: this.code };
    this.flaskApiService.callFlaskApi(request).subscribe({
      next: (response: ApiResponse) => {
        console.log(response);
        this.result = response.result;
        this.errorMessage = '';
      },
      error: (err) => {
        this.errorMessage = 'Error occurred while calling API: ' + err.message;
        this.result = null;
      }
    });
  }


}
