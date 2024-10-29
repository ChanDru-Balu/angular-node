import { HttpClient , HttpClientModule } from '@angular/common/http';
import { Injectable , inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:5000/auth';
  private http = inject(HttpClient);

  constructor() { }

  register(username:string, password:string){
    return this.http.post(`${this.apiUrl}/register`,{username,password})
  }

  login(username: string  , password: string){
    return this.http.post(`${this.apiUrl}/login`,{username,password})
  }
}
