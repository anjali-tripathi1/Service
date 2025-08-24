import { Component } from '@angular/core';
import { Hero } from "./hero/hero";
import { Sidebar } from "./sidebar/sidebar";

@Component({
  selector: 'app-home',
  imports: [Hero, Sidebar],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
