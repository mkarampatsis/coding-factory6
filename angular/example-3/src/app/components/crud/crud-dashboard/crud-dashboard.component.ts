import { Component } from '@angular/core';
import { CrudNavbarComponent } from '../crud-navbar/crud-navbar.component';

@Component({
  selector: 'app-crud-dashboard',
  standalone: true,
  imports: [CrudNavbarComponent],
  templateUrl: './crud-dashboard.component.html',
  styleUrl: './crud-dashboard.component.css'
})
export class CrudDashboardComponent {

}
