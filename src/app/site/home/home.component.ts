import { Component, OnInit } from '@angular/core';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faSearch=faMagnifyingGlass;
  searchTerm:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
