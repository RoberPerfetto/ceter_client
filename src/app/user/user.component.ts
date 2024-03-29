import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';

import { User } from '../model/user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users: User[] = [];
  public user: User = new User();
  valor: string;
  isAuthenticated: boolean;

  constructor(private router: Router, private userService: UserService, private oktaAuth: OktaAuthService) { }

  async ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
  };

  deleteUser(user: User): void {
	if(window.confirm('¿Esta seguro que desea eliminar a este usuario?')){
	    this.userService.deleteUser(user)
	      .subscribe( data => {
		this.users = this.users.filter(u => u !== user);
	      });
	}
  };

  getUser(user: User){
     this.userService.getUser(user).subscribe(dat => {this.user = dat});
  };

  updateUser(user: User){    
     this.userService.putUser(user).subscribe( data => {
          alert("Actualizado con éxito");
	  location.reload();
        });
  };

  addMonto(user: User){
     var val = +this.valor; 
     this.userService.addMonto(user,val).subscribe( data => {
	  alert("Monto agregado con éxito");
	  location.reload();
     });
  };
 
}
