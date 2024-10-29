import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { User } from '../interfaces/mongo-backend';

const API_URL=`${environment.apiURL}/user`

@Injectable({
  providedIn: 'root'
})
export class UserService {
    http: HttpClient = inject(HttpClient)

    registerUser(user: User) {
        return this.http.post<{msg: string}>(`${API_URL}/register`, user)
    }
}
