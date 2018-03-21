import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

@Input() quote:Quote;
@Output() isComplete= new EventEmitter<boolean>();

quoteDelete(complete:boolean){
  this.isComplete.emit(complete);
}
deleteQuote(isComplete,index){
  if (isComplete){
    //this.quotes.splice(index,1);
  }
}
//toogleDetails(index){
  //      this.quote.showDescription = !this.quote.showDescription;
   //}
  constructor() { }

  ngOnInit() {
  }

}
