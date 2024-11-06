import { Component, inject } from '@angular/core';
import { CrudNavbarComponent } from '../crud-navbar/crud-navbar.component';
import { CustomerService } from '../../../shared/services/customer.service';
import { FormGroup, FormControl, FormArray, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Customer } from '../../../shared/interfaces/customer';

@Component({
  selector: 'app-crud-create-example',
  standalone: true,
  imports: [
    CrudNavbarComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule
],
  templateUrl: './crud-create-example.component.html',
  styleUrl: './crud-create-example.component.css'
})
export class CrudCreateExampleComponent {

    customerService = inject(CustomerService)

    form = new FormGroup({
        givenName: new FormControl('', Validators.required),
        surName: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        afm: new FormControl('', Validators.required),
        phoneNumbers: new FormArray([
            new FormGroup({
                number: new FormControl('', Validators.required),
                type: new FormControl('', Validators.required)
            })
        ]),
        address: new FormGroup({
            street: new FormControl('', Validators.required),
            city: new FormControl('', Validators.required),
            zipCode: new FormControl('', Validators.required),
            number: new FormControl('', Validators.required)  
        })
    })

    phoneNumbers = this.form.get('phoneNumbers') as FormArray 

    removePhoneNumber(index:number){
        console.log(this.phoneNumbers.length)
        console.log(index)
        this.phoneNumbers.removeAt(index);
    }

    addPhoneNumber(){
        this.phoneNumbers.push(
            new FormGroup({
                number: new FormControl("", Validators.required),
                type: new FormControl("", Validators.required)
            })
        )
    }

    onSubmit(value: any){
        console.log(value);
        const customer = this.form.value as Customer
        this.customerService.createCustomer(customer).subscribe({
            next: (response) => {
                console.log("Customer Created>>", response)
                this.form.reset();
            },
            error: (error) => {
                console.log("There was a problem:", error);
            }
        })
    }
}   
