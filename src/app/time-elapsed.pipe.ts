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
    if(interval>2){
      return `${Math.floor(interval)} years`
    }
    interval= secondsPassed/31536000;
    if(interval>1){
      return `${Math.floor(interval)} year`
    }

    interval= secondsPassed/2592000;
    if(interval>2){
      return `${Math.floor(interval)} months`
    }

    interval= secondsPassed/2592000;
    if(interval>1){
      return `${Math.floor(interval)} month`
    }

    interval=secondsPassed/86400;
    if(interval>2){
      return `${Math.floor(interval)} days`
    }

    interval=secondsPassed/86400;
    if(interval>1){
      return `${Math.floor(interval)} day`
    }

    interval=secondsPassed/3600;
    if(interval>2){
      return `${Math.floor(interval)} hours`
    }

    interval=secondsPassed/3600;
    if(interval>1){
      return `${Math.floor(interval)} hour`
    }

    interval=secondsPassed/60;
    if(interval>2){
      return `${Math.floor(interval)} minutes`
    }

    interval=secondsPassed/60;
    if(interval>1){
      return `${Math.floor(interval)} minute`
    }

    return `${Math.floor(interval)} seconds`
  }
  

}
