import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '../services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
    const userService = inject(UserService);
    const router = inject(Router);

    if (userService.user()) {
        return true
    }
  
    return router.navigate(['login'])
};
