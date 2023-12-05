import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() onSubmitRegisterEvent = new EventEmitter();

  active: String = "login"
  login: String = ""
  password: String = ""
  firstName: String = ""
  lastName: String = ""

  onSubmitLogin(): void {
    this.onSubmitLoginEvent.emit({
      "login": this.login,
      "password": this.password
    })
  }

  onSubmitRegister() {
    this.onSubmitRegisterEvent.emit({
      "firstName": this.firstName,
      "lastName": this.lastName,
      "login": this.login,
      "password": this.password
    })
  }

  onRegisterTab() {
    this.active = "register"
  }

  onLoginTab() {
    this.active = "login"
  }
}
