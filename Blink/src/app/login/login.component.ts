import { Component } from '@angular/core';
import{ FormGroup, FormControl,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required,Validators.minLength(4),Validators.maxLength(6)])
  })

  constructor(private router:Router,private auth:AuthService){}

  submit(){
    if(this.login.value.email=='palak@gmail.com' && this.login.value.password=='12345'){
      // alert('Login Successful')
      console.log("Login Successful")
      this.auth.setData(this.login.value.email)
      console.log("Token: ",this.login.value.email)
      this.router.navigateByUrl('patient/home')
    }
    else{
      alert("Invalid Credentials")
    }
    
  }
}
