import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Credentials } from '../../shared/interfaces/mongo-backend';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {

    userService = inject(UserService);
    router = inject(Router)

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
                this.router.navigate(['restricted-content-example']);
            },
            error: (error) =>{
                console.log('Login Error', error);
            }
        })

    }
}
