import { Component, inject } from '@angular/core';
import { AlertComponent, FormModule } from '@coreui/angular';
import { UsersService } from '../../services/users.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormModule, ReactiveFormsModule, AlertComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  userService = inject(UsersService)

  logForm  = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  constructor(private router: Router){}


  login(){
    if (this.logForm.invalid) {
      this.logForm.markAllAsTouched();  
      return;
    }

    console.log(this.logForm.value.username)
    this.userService.login(
      {
        "username":this.logForm.value.username!,
        "password":this.logForm.value.password!
      }
    ).then(data=>{
      if(data=='User not found'){
        document.querySelector('c-alert')!.textContent = 'Usuario o contrasena incorrectos';
        document.querySelector('c-alert')!.setAttribute('style', '')
        setTimeout(()=>{
          document.querySelector('c-alert')!.setAttribute('style', 'display: none;')
        }, 5000)
        return;
      }

      this.logForm.reset()
      this.router.navigate(['/'])
      localStorage.setItem('user', data)
    })
  }

}
