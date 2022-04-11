import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  id!:number;
  quote!:string;
  author!:string;
  upvote!:number;
  downvote!:number;
  publisher!:string;
  date!:Date;

  newPubdQuote!:Quote;

  @Output() addQuote= new EventEmitter<Quote>();

  submitQuote(){
    this.newPubdQuote= new Quote(this.id,this.quote,this.author,0,0,this.publisher, new Date());

    this.addQuote.emit(this.newPubdQuote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
