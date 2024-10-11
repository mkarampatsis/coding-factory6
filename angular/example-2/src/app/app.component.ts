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
  title = 'example-2';

  person = {
    givenName: "Markos",
    surName: "Karampatsis",
    email: "marka@aueb.gr",
    age: 51
  };

  person0: Person = {
    givenName: "John",
    surName: "Little",
    email: "john@aueb.gr",
    age: 51
  }

  person1: Person = {
    givenName: "Bob",
    surName: "Dylan",
    email: "bob@aueb.gr",
    age: 80
  }
}
