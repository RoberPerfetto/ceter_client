import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OktaCallbackComponent, OktaAuthModule } from '@okta/okta-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './shared/okta/auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user.component';
import { UserUpdateComponent } from './user/user-update.component';
import { UserService } from './user/user.service';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    UserUpdateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule 
  ],
  providers: [UserService, 
              {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
