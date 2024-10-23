import { Component, ViewChild, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { EPerson } from '../../../shared/interfaces/person';

@Component({
  selector: 'app-template-form-structure',
  standalone: true,
  imports: [
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './template-form-structure.component.html',
  styleUrl: './template-form-structure.component.css'
})
export class TemplateFormStructureComponent implements AfterViewInit {
    @Output() person = new EventEmitter<EPerson>();
    @ViewChild('userForm', {static: false}) form: NgForm | undefined;

    ngAfterViewInit(): void {
        setTimeout(()=>{
            if (this.form) {
                this.form.setValue({
                    givenName: "John",
                    surName:"Doe",
                    age:30,
                    email: "john@aueb.gr",
                    address: "road2"
                })
            }
        },0)
    }

    onSubmit(value:any) {
        console.log(value)
        console.log(this.form)
        console.log(this.form?.value)
        this.person.emit(value as EPerson);
    }

    onSetValue(){
        this.form?.setValue({
            givenName: "lakis",
            surName:"lalakis",
            age: 50,
            email:"lakis@aueb.gr",
            address:"road1"
        })
    }
}
