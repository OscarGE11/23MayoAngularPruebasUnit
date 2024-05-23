import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { ApiResponse } from '../_modelo/apiresponse';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  private baseUrl = 'https://peticiones.online/api/users';

  private httpClient = inject(HttpClient);

  getSimpleValue(text: string): string {
    return text.toUpperCase();
  }

  getUsers(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(this.baseUrl);
  }

  getUsersProm(): Promise<ApiResponse> {
    return firstValueFrom(
      this.httpClient.get<ApiResponse>(this.baseUrl)
    );
  }
}
