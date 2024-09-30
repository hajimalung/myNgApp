import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  count! : number;

  constructor(private store:Store<{counter:CounterState}>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe(state=>{
      this.count = state.count;
    });
  }

}
