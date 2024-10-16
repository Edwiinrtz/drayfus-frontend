import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import { AlertComponent, FormModule } from '@coreui/angular';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,FormModule, ReactiveFormsModule, AlertComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  nUser?: User
  usersService = inject(UsersService)
  signupForm = new FormGroup({
    name:new FormControl('', [Validators.required]),
    username:new FormControl('', [Validators.required]),
    password:new FormControl('', [Validators.required, Validators.minLength(6)]),
    email:new FormControl('', [Validators.required, Validators.email]),
  })

  constructor(private router: Router){
  }

  signup(){


    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();  // Marca los campos como tocados
      return;
    }

    this.nUser = {
      "name":this.signupForm.value.name!,
      "email":this.signupForm.value.email!,
      "username":this.signupForm.value.username!,
      "password":this.signupForm.value.password!,
    }

    this.usersService.signup(this.nUser).then(data=> {
      //redirect to home
      console.log(data)
      if(data==='An error has occurred'){
        document.querySelector('c-alert')!.textContent = data+'\nrevise sus credenciasles o intente mas tarde';
        document.querySelector('c-alert')!.setAttribute('style', '')
        setTimeout(()=>{
          document.querySelector('c-alert')!.setAttribute('style', 'display: none;')
        }, 5000)
        return;
      }

      this.nUser = undefined;
      this.signupForm.reset()
      this.router.navigate(['/'])
    })
  }

}
