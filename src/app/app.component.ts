import { Component, OnInit } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { NavigationCancel,  
  Event,  
         NavigationEnd,  
         NavigationError,  
         NavigationStart,  
         Router } from '@angular/router'; 
import {AuthUserService} from './auth-user.service';
import { Observable } from 'rxjs/Observable';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{  
  title = 'Aqib Ferhan';  
  faHome = faHome;

  isLoggedIn$: Observable<boolean>;

  public isMenuCollapsed = true;

  constructor(private loadingBar: SlimLoadingBarService, private router: Router, private authUserService: AuthUserService) {  
    this.router.events.subscribe((event: Event) => {  
      this.navigationInterceptor(event);  
    });  
  }  

  ngOnInit(){
    this.isLoggedIn$ = this.authUserService.isLoggedIn;
  }

  onLogout(){
    console.log('Logging out from app...');
    this.authUserService.logout();
  }
  private navigationInterceptor(event: Event): void {  
    if (event instanceof NavigationStart) {  
      this.loadingBar.start();  
    }  
    if (event instanceof NavigationEnd) {  
      this.loadingBar.complete();  
    }  
    if (event instanceof NavigationCancel) {  
      this.loadingBar.stop();  
    }  
    if (event instanceof NavigationError) {  
      this.loadingBar.stop();  
    }  
  }  
} 
