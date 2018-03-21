import { Component, OnInit, } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes= [
    new Quote(1,'Watch Finding Nemo','jjj',new Date(2018,11,2)),
    new Quote(2,'Buy Cookies','jkj',new Date(2018,1,12)),
  ]

    addNewQuote(quote){
     let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
    //
  };
        deleteQuote(isComplete,index){
          if (isComplete){
            this.quotes.splice(index,1);
          }
    //    }
    //    toogleDetails(index){
    //            this.quotes[index].showDescription = !this.quotes[index].showDescription;
    //        }
  }
  constructor() { };

  ngOnInit() {
  };
