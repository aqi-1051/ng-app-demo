import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import {User} from './Model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn(){
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router) { }

  login(user: User){
    if(user.username !== '' && user.passkey !== ''){
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }
  }

  logout(){
    this.loggedIn.next(false);
    this.router.navigate(['login']);
  }
}
