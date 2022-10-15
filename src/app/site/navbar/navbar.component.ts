import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() darkMode:boolean = false;
  @Output() modeChangeEvent:EventEmitter<string> = new EventEmitter<string>();
  mode_icon = faMoon;
  constructor() { }

  ngOnInit(): void {

  }
  changeMode = ()=>{
    this.modeChangeEvent.emit('chnage current mode');
    this.darkMode = !this.darkMode;
  }

}
