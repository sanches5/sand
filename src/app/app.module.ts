import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SignInComponent} from './sign-in/sign-in.component';
import { ProfileComponent } from './profile/profile.component';
import { PostComponent } from './profile/post/post.component';
import { InputComponent } from '../UI/input/input.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'signIn', component: SignInComponent},
      {path: 'profile', component: ProfileComponent},
    ]),
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    ProfileComponent,
    PostComponent,
    InputComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
