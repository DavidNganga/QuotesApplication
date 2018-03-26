import { Component } from '@angular/core';
@Component({
  selector: 'app-downvote',
  template: `
    <button class= "btn btn-warning"(click)="onDownvote($event)">Downvote</button>
    {{clickMessage}}`
})
export class DownvoteComponent {
  clickMessage = '';
  clicks = 1;
  onDownvote(event: any) {
    let evtMsg = event ? '' + event.target.tagName  : '';
    this.clickMessage = (`${this.clicks++}. `);
  }
}
