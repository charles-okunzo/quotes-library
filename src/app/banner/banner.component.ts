import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  greetings():string{
    let currentTime= new Date();
    let hours= currentTime.getHours();
    if(hours<12){
      return "Good Morning!"
    }else{
      return "Good Evening!"
    }
  }

  ngOnInit(): void {
  }

}
