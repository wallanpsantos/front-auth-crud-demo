import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AxiosService} from "../axios.service";

@Component({
  selector: 'app-auth-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-content.component.html',
  styleUrl: './auth-content.component.scss'
})
export class AuthContentComponent {

  data: String[] = []

  constructor(private axiosService: AxiosService) {
  }

  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/v1/informations",
      {}
    ).then(
      (response) => {
        this.data = response.data;
      }).catch(
      (error) => {
        if (error.response.status === 401) {
          this.axiosService.setAuthToken(null)
        } else {
          this.data = error.response.code
        }
      }
    )
  }
}
