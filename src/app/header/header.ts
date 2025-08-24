import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribeService';
import { Home } from "./home/home";
import { Admin } from "./admin/admin";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [Home, Admin, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
  providers : [SubscribeService]
})
export class Header {
    selectedTab: string = 'home';

  //1. HOW TO PROVIDE DEPENDENCY
  constructor(private subService: SubscribeService){

  }

  //When HOME Link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }

  OnSubscribe(){
    this.subService.OnSubscribeClicked('monthly');
  }
}
