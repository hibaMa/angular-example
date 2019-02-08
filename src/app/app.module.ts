import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegesterComponent } from './regester/regester.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegesterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
