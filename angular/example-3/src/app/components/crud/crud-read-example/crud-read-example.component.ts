import { Component } from '@angular/core';
import { CrudNavbarComponent } from '../crud-navbar/crud-navbar.component';

@Component({
  selector: 'app-crud-read-example',
  standalone: true,
  imports: [CrudNavbarComponent],
  templateUrl: './crud-read-example.component.html',
  styleUrl: './crud-read-example.component.css'
})
export class CrudReadExampleComponent {

}
