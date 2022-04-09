import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  pubdQuotes:Quote[]=[
    new Quote(1, "A life not lived for others is not a life", "Mother Teresa", 0, 0, "Carol Robi"),
    new Quote(2, "Glory lies in the attempt to reach one's goal and not in reaching it", "Mahatma Gandhi", 0, 0, "Walter Onzere"),
    new Quote(3, "If you are walking down the right path and you're willing to keep walking, eventually you'll make progress", "Barrack Obama", 0, 0, "Angel Becky")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
