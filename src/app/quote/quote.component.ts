import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  pubdQuotes:Quote[]=[
    new Quote(1, "A life not lived for others is not a life", "Mother Teresa", 0, 0, "Carol Robi", new Date(2022, 0, 31)),
    new Quote(2, "Glory lies in the attempt to reach one's goal and not in reaching it", "Mahatma Gandhi", 0, 0, "Walter Onzere", new Date(2022, 1, 15)),
    new Quote(3, "If you are walking down the right path and you're willing to keep walking, eventually you'll make progress", "Barrack Obama", 0, 0, "Angel Becky", new Date(2022, 2, 31))
  ];

  toggleDet(index:number){
    this.pubdQuotes[index].showDetails=!this.pubdQuotes[index].showDetails
  }
  // upvotesArr:number[]= this.pubdQuotes.map(pubdQuote=>pubdQuote.upvote);

  count=0;

  counter(index:number){

    this.count+=this.pubdQuotes[index].upvote;
    this.count++
    // return this.count;
  }

  deleteQuote(viewed:boolean, index:number){
   let toErase=confirm("Are you sure you want to delete this goal. This Process cannot be undone.")

   if(toErase){
     this.pubdQuotes.splice(index,1);
   }
  }



  constructor() { }

  ngOnInit(): void {
  }

}
