import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router:Router){
    
  }

  addNewClick = function(){
    this.router.navigateByUrl('add_new_contact');
  }
  dashboradClick = function(){
    this.router.navigateByUrl('/');
  }
}
