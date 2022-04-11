import { Pipe, PipeTransform } from '@angular/core';
import { timeInterval } from 'rxjs';

@Pipe({
  name: 'timeElapsed'
})
export class TimeElapsedPipe implements PipeTransform {

  transform(value: any): any {
    
    let currentTime:any= new Date();
    let secondsPassed= Math.floor((currentTime-value)/1000);
    let interval= secondsPassed/31536000;
    if(interval>1){
      return `${Math.floor(interval)} years`
    }

    interval= secondsPassed/2592000;
    if(interval>1){
      return `${Math.floor(interval)} months`
    }

    interval=secondsPassed/86400;
    if(interval>1){
      return `${Math.floor(interval)} days`
    }

    interval=secondsPassed/3600;
    if(interval>1){
      return `${Math.floor(interval)} hours`
    }

    interval=secondsPassed/60;
    if(interval>1){
      return `${Math.floor(interval)} minutes`
    }

    return `${Math.floor(interval)} seconds`
  }
  

}
