import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() darkMode :boolean = false;
  title = 'rest-api-countries';
  changeMode = ()=>{this.darkMode = !this.darkMode;}
}
