import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    userService = inject(UserService);
    user = this.userService.user;

    logout(){
        this.userService.logoutUser()
    }
}
