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
      return `${Math.floor(interval)} years ago`
    }
    interval= secondsPassed/31536000;
    if(interval>1){
      return `${Math.floor(interval)} year ago`
    }

    interval= secondsPassed/2592000;
    if(interval>2){
      return `${Math.floor(interval)} months ago`
    }

    interval= secondsPassed/2592000;
    if(interval>1){
      return `${Math.floor(interval)} month ago`
    }

    interval=secondsPassed/86400;
    if(interval>2){
      return `${Math.floor(interval)} days ago`
    }

    interval=secondsPassed/86400;
    if(interval>1){
      return `${Math.floor(interval)} day ago`
    }

    interval=secondsPassed/3600;
    if(interval>2){
      return `${Math.floor(interval)} hours ago`
    }

    interval=secondsPassed/3600;
    if(interval>1){
      return `${Math.floor(interval)} hour ago`
    }

    interval=secondsPassed/60;
    if(interval>2){
      return `${Math.floor(interval)} minutes ago`
    }

    interval=secondsPassed/60;
    if(interval>1){
      return `${Math.floor(interval)} minute ago`
    }

    return `${Math.floor(interval)} seconds`
  }
  

}
