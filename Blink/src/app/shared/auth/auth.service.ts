import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setData(token:any){
    sessionStorage.setItem("token",token)
  }

  getToken(){
    return sessionStorage.getItem('token')
  }

  remove(){
    sessionStorage.clear()
  }
}
