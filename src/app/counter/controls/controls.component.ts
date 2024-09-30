import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  @Output() onIncrement = new EventEmitter();
  @Output() onDecrement = new EventEmitter();
  @Output() onResest = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  emitIncrement(){
    this.onIncrement.emit();
  }

  emitDecrement(){
    this.onDecrement.emit();
  }

  emitReset(){
    this.onResest.emit();
  }

}
