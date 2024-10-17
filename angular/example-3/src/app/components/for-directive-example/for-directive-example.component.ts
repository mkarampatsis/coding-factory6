import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
    users:Person[] = [
        {
            "givenName": "Taylor",
            "surName": "Adams",
            "email": "tayloradams@live.com",
            "age": 62,
            "address": "Fielding"
          },
          {
            "givenName": "Daniel",
            "surName": "Perry",
            "email": "dperry@rocketmail.com",
            "age": 52,
            "address": "Mechanicsville"
          },
          {
            "givenName": "Jose",
            "surName": "Sanchez",
            "email": "jose.t11@yahoo.com",
            "age": 54,
            "address": "Freeland"
          },
          {
            "givenName": "Rebecca",
            "surName": "Robinson",
            "email": "rrobinson@ymail.com",
            "age": 30,
            "address": "Evansville"
          },
          {
            "givenName": "Robert",
            "surName": "Robinson",
            "email": "robert_f@aol.com",
            "age": 38,
            "address": "Rehoboth"
          },
          {
            "givenName": "Danielle",
            "surName": "Powell",
            "email": "d_l_powell@gmail.com",
            "age": 77,
            "address": "Salinas"
          },
          {
            "givenName": "Sarah",
            "surName": "Henderson",
            "email": "smhenderson65@ymail.com",
            "age": 59,
            "address": "Chula Vista"
          },
          {
            "givenName": "Grace",
            "surName": "Sanchez",
            "email": "grace.renee.sanchez@yahoo.com",
            "age": 48,
            "address": "Bothell"
          },
          {
            "givenName": "Amanda",
            "surName": "Washington",
            "email": "a_washington@outlook.com",
            "age": 27,
            "address": "Ione"
          },
          {
            "givenName": "Dylan",
            "surName": "Henderson",
            "email": "d_s@hotmail.com",
            "age": 52,
            "address": "Humphrey"
          }
      ]
}
