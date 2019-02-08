import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  isRememberMeChecked = false;
  KeepMeSignedIn = false;
  toggleRememberMe(): void {
    this.isRememberMeChecked = !this.isRememberMeChecked;
  }
  toggleKeepMeSignedIn(): void {
    this.KeepMeSignedIn = !this.KeepMeSignedIn;
  }
  constructor() { }

  ngOnInit() {
  }

}
