import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },{
        path:'home',
        component:HomeComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'signup',
        component:SignupComponent
    },
    {
        path:'profile',
        component:UserInfoComponent
    }
];
