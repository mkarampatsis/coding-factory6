import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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

  person0 = {
    givenName: "John",
    surName: "Little",
    email: "john@aueb.gr",
    age: 51
  }

  person1 = {
    givenName: "Bob",
    surName: "Dylan",
    email: "bob@aueb.gr",
    age: 80
  }
}
