import { Component } from '@angular/core';
import { constants } from 'src/app/Constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  currentUser: string;
  constructor(private router: Router) {}
  updateUser(): void {
    // console.log('Inside');
    if (this.currentUser)
      constants.userName =
        this.currentUser + '_' + Math.round(Math.random() * 100000);
    this.router.navigate(['/chat']);
  }
}
