import { Component, Input } from '@angular/core';
import { CardModule, RowComponent, ColComponent } from '@coreui/angular';
import { User } from '../../models/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CardModule, RowComponent, ColComponent],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent {

  user?: User;

  constructor(private router: Router){
      const userData = localStorage.getItem('user');
      this.user = JSON.parse(userData!);
  }


  logOut(){
    localStorage.clear()
    this.router.navigate(['/'])
  }

}
