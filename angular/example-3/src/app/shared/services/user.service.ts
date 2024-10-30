import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Credentials, User } from '../interfaces/mongo-backend';

const API_URL=`${environment.apiURL}/user`

@Injectable({
  providedIn: 'root'
})
export class UserService {
    http: HttpClient = inject(HttpClient)

    registerUser(user: User) {
        return this.http.post<{msg: string}>(`${API_URL}/register`, user)
    }

    check_duplicate_email(email: string){
        return this.http.get<{msg: string}>(`${API_URL}/check_duplicate_email/${email}`)
    }

    loginUser(credentials: Credentials){
        return this.http.post<{access_token: string}>(`${API_URL}/login`,credentials)

    }
}
