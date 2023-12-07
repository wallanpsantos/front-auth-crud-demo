import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WelcomeContentComponent} from "../welcome-content/welcome-content.component";
import {LoginFormComponent} from "../login-form/login-form.component";
import {AxiosService} from "../axios.service";
import {AuthContentComponent} from "../auth-content/auth-content.component";
import {ButtonsComponent} from "../buttons/buttons.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, WelcomeContentComponent, LoginFormComponent, AuthContentComponent, ButtonsComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  componentToShow: string = "welcome";

  constructor(private axiosService: AxiosService) {
  }

  onLogin(input: any) {
    this.axiosService.request(
      "POST",
      "/v1/login",
      {
        login: input.login,
        password: input.password
      }
    ).then(response => {
      /* Salva na resposta do login o token JWT configurado no axios.service */
      this.axiosService.setAuthToken(response.data.token)
      this.componentToShow = "messages"
    })

  }

  onRegister(input: any) {
    this.axiosService.request(
      "POST",
      "/v1/register",
      {
        firstName: input.firstName,
        lastName: input.lastName,
        login: input.login,
        password: input.password
      }
    ).then(response => {
      /* Salva na resposta do Registro do usuario o token JWT configurado no axios.service */
      this.axiosService.setAuthToken(response.data.token)
      this.componentToShow = "messages"
    })
  }

  showComponent(componentToShow: string) {
    this.componentToShow = componentToShow;
  }
}
