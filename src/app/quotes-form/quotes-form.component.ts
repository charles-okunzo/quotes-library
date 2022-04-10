import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  newPubdQuote= new Quote(0,"","",0,0,"", new Date());

  @Output() addQuote= new EventEmitter<Quote>();

  submitQuote(){
    this.addQuote.emit(this.newPubdQuote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
