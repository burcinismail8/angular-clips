import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  credentials = { email: '', password: '' };
  showAlert = false;
  alertMsg = 'Please wait...';
  alertColor = 'blue';
  inSubmission = false;

  constructor(private auth: AngularFireAuth) {}
  async login() {
    this.showAlert = true;
    this.alertMsg = 'Please wait...';
    this.alertColor = 'blue';
    this.inSubmission = true;
    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email,
        this.credentials.password
      );
    } catch (error) {
      this.alertMsg = 'An unexpected error occured. Please try again later';
      this.alertColor = 'red';
      this.inSubmission = false;
      console.log(error);
      return;
    }
    this.alertMsg = `Success! Welcome, ${this.credentials.email}`;
    this.alertColor = 'green';
  }
  ngOnInit(): void {}
}
