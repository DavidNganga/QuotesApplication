import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  quotes= [
    new Quote(1,'Watch Finding Nemo','jjj',new Date(2018,11,2)),
    new Quote(2,'Buy Cookies','jkj',new Date(2018,1,12)),
  ]
@Input() quote:Quote;
@Output() isComplete= new EventEmitter<boolean>();

quoteDelete(complete:boolean){
  this.isComplete.emit(complete);
}
deleteQuote(isComplete,index){
  if (isComplete){
    this.quotes.splice(index,1);
  }
}
toogleDetails(index){
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
  constructor() { }

  ngOnInit() {
  }

}
