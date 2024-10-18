import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ListGroupMenuComponent } from './components/list-group-menu/list-group-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ListGroupMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'example-3';
}
