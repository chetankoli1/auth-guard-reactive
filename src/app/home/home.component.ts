import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router : Router) {
    
  }
  userLogout()
  {
    localStorage.removeItem('auth');
    this.router.navigate(['/login']);
  }

  goToChild()
  {
    this.router.navigate(['/home/homeChildTest'])
  }
}
