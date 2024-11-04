import { Component } from '@angular/core';
import { CrudNavbarComponent } from '../crud-navbar/crud-navbar.component';

@Component({
  selector: 'app-crud-create-example',
  standalone: true,
  imports: [CrudNavbarComponent],
  templateUrl: './crud-create-example.component.html',
  styleUrl: './crud-create-example.component.css'
})
export class CrudCreateExampleComponent {

}
