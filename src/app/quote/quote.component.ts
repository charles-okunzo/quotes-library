import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  publishedQuote:Quote[]=[
    new Quote(1, "A life not lived for others is not a life", "Mother Teresa", 0, 0)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
