import { Component , OnInit} from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isLogin: boolean = false
  constructor( private auth: AuthService, private router: Router){}

  ngOnInit():void{
    this.checkLogin()
  }

  checkLogin(){
    if(this.auth.getToken == null){
      this.isLogin = false
    }
    else{
      this.isLogin = true
    }
  }

  logout(){
    this.auth.remove()
    this.router.navigateByUrl('/login')
    console.log("Logout Done")
    console.log(this.auth.getToken)
  }
}
