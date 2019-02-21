import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaCallbackComponent, OktaAuthModule } from '@okta/okta-angular';

import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './user/add-user.component';
import { UserComponent } from './user/user.component';

const config = {
  issuer: 'https://dev-224655.oktapreview.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oaj2tq51esTPkxwQ0h7'
};

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  
  { path: 'home', component: HomeComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'users', component: UserComponent },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            OktaAuthModule.initAuth(config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
