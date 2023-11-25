import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let value = localStorage.getItem('auth');
  const go  = inject(Router);
  if(value)
  {
    return true;
  }
  else{
    go.navigate(['/login']);
  }
  return true;
};
