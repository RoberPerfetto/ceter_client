import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../model/user.model';
import { UserService } from './user.service';
import { UserComponent } from './user.component';

@Component({
  selector: 'app-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user.component.css']
})
export class UserUpdateComponent implements OnInit {

  user: User;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  };

  
  updateUser(user: User){
     
     this.userService.putUser(user).subscribe( data => {
          alert("Actualizado con éxito");
	  location.reload();
        });
  };


}
