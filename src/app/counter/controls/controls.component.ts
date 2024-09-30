import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { decrement, increment, reset } from '../state/counter.actions';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {



  // store selector and State interface to define the type
  constructor(private store:Store<{counter:CounterState}>) { }

  ngOnInit(): void {
  }

  emitIncrement(){
    this.store.dispatch(increment());
  }

  emitDecrement(){
    this.store.dispatch(decrement());
  }

  emitReset(){
    this.store.dispatch(reset())
  }

}
