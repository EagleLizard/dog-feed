import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'dg-feed-reactions',
  templateUrl: './feed-reactions.component.html',
  styleUrls: ['./feed-reactions.component.scss']
})
export class FeedReactionsComponent implements OnInit {

  @Input() upPaws:number;
  @Input() barks:number;

  constructor() { }

  ngOnInit() {
  }

}
