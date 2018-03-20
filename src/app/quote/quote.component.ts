import { Component, OnInit, } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


    addNewQuote(quote){
     let quoteLength = this.Quotes.length;
    quote.id=quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.Quotes.push(quote)
    //
  };
    //    deleteQuote(isComplete,index){
    //      if (isComplete){
    //        this.quotes.splice(index,1);
    //      }
    //    }
    //    toogleDetails(index){
    //            this.quotes[index].showDescription = !this.quotes[index].showDescription;
    //        }
  constructor() { };

  ngOnInit() {
  };


}
