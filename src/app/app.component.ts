import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {AuthContentComponent} from "./auth-content/auth-content.component";
import {HeaderComponent} from "./header/header.component";
import {ContentComponent} from "./content/content.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AuthContentComponent, HeaderComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front-auth-crud-demo';
}
