import { Component } from '@angular/core';
@Component({
  selector: 'app-upvote',
  template: `
    <button  class = "btn btn-info" (click)="onUpvote($event)">Upvote</button>
    {{clickMessage}}`
})
export class UpvoteComponent {
  clickMessage = '';
  clicks = 1;
  onUpvote(event: any) {
    let evtMsg = event ? '' + event.target.tagName : '';
    this.clickMessage = (`${this.clicks++}. `);
  }
}
