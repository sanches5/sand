import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SignInComponent} from './sign-in/sign-in.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'signIn', component: SignInComponent},
    ]),
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
