import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Person } from './shared/interfaces/person';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'example-3';

  person0: Person = {
    givenName: "name1",
    surName: "surname1",
    age: 22,
    email: "name1@aueb.gr",
    address: "Athens"
  }

  person1: Person = {
    givenName: "name2",
    surName: "surname2",
    age: 22,
    email: "name2@aueb.gr",
    address: "Athens"
  }
}
