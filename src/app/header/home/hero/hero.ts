import { Component, inject } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribeService';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  providers : [SubscribeService]
})
export class Hero {
    //1. HOW TO PROVIDE DEPENDENCY
  // constructor(private subService: SubscribeService){

  // }

  subService = inject(SubscribeService);

  OnSubscribe(){
    this.subService.OnSubscribeClicked('yearly');
  }
}
