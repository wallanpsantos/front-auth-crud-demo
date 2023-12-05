import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WelcomeContentComponent} from "../welcome-content/welcome-content.component";
import {LoginFormComponent} from "../login-form/login-form.component";
import {AxiosService} from "../axios.service";
import {AuthContentComponent} from "../auth-content/auth-content.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, WelcomeContentComponent, LoginFormComponent, AuthContentComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

  constructor(private axiosService: AxiosService) {
  }

  onLogin(input: any) {
    this.axiosService.request(
      "POST",
      "/login",
      {
        login: input.login,
        password: input.password
      }
    )

  }
}
