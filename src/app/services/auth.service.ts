import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { USER } from 'src/constants/api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  createUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}${USER.CREATE}`, user);
  }
}
