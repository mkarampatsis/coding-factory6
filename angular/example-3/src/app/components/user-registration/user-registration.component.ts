import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, ValueChangeEvent } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/interfaces/mongo-backend';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {

    userService = inject(UserService)

    registrationStatus: { success: boolean, message: string } = {
        success:false,
        message: "Not attempted yet"
    }

    form = new FormGroup({
        givenName: new FormControl('', Validators.required),
        surName: new FormControl('',Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(4)] ),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(4)])
    })

    onSubmit(value:any){
        console.log(value);
        const user: User = {
            givenName: this.form.get('givenName')?.value || '',
            surName: this.form.get('surName')?.value || '',
            email: this.form.get('email')?.value || '',
            password: this.form.get('password')?.value || ''
        }

        this.userService.registerUser(user).subscribe({
            next: (response) => {
                console.log("No Errors",response)
                this.registrationStatus = {success: true, message: response.msg}
            },
            error: (response) =>{
                console.log("Errors",response)
                let message = response.error.msg;
                // console.log(response.error)
                this.registrationStatus = {success: false, message: message}
            }
        })
    }

    registerAnother(){
        this.form.reset();
        this.registrationStatus = {success:false, message:'Not attempted yet'}
    }
}
