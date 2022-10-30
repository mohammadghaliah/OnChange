import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input('title') title: any;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    //it works whenever the value given to subcription parameter in the parent changes
    if (changes.title) {
      console.log('changes', changes);
      console.log('number', this.title);
    }
  }
}
