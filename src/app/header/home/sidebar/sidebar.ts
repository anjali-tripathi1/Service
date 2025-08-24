import { Component } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribeService';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

   //1. HOW TO PROVIDE DEPENDENCY
  constructor(private subService: SubscribeService){

  }

  OnSubscribe(){
    this.subService.OnSubscribeClicked('quaterly');
  }
}
