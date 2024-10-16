import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private URI = 'http://localhost:8080/users'
  constructor() { }


  signup(user:User):Promise<any>{

    return fetch(
      this.URI+'/signup', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body:JSON.stringify(user)
      }
    ).then(response => {
      if(!response.ok){
        //generate alert
        return response.text()
      }
      localStorage.setItem('user',JSON.stringify(user))
      return response.text()

    })
  }

  login(credentials: any):Promise<any>{

    var options = {
      method:"POST",
      headers: {
      'Content-Type': 'application/json',
      },
      body:JSON.stringify(credentials)
    }
    console.log(JSON.stringify(credentials))
    return fetch(this.URI+'/login', options).then(response => {

      console.log(response.ok)
      if(response.ok){
        var data =  response.text();
        console.log(data)
        // localStorage.setItem('user', response.json())
        return data
      }

      return response.text()
    })

  }
}
