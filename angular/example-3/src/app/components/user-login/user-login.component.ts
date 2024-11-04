import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Credentials } from '../../shared/interfaces/mongo-backend';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { LoggedInUser } from '../../shared/interfaces/mongo-backend';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {

    userService = inject(UserService);
    router = inject(Router);

    invalidLogin = false;

    form = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('',Validators.required)
    })

    onSubmit(){
        const credentials = this.form.value as Credentials;
        this.userService.loginUser(credentials).subscribe({
            next: (response) => {
                const access_token = response.access_token;
                console.log(access_token);
                localStorage.setItem("access_token", access_token);
                
                const decodedTokenSubject = jwtDecode(access_token)
                    .sub as unknown as LoggedInUser;
                console.log(decodedTokenSubject)
                
                this.userService.user.set({
                    fullname: decodedTokenSubject.fullname,
                    email: decodedTokenSubject.email
                })
                this.router.navigate(['restricted-content-example']);
            },
            error: (error) =>{
                console.log('Login Error', error);
                this.invalidLogin = true;
            }
        })

    }
}
