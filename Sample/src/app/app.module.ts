import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusCodeComponent } from './components/status-codes/status-code/status-code.component';
import { StatusCodesComponent } from './components/status-codes/status-codes.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusCodeComponent,
    StatusCodesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
