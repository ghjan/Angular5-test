import { Component, OnInit } from '@angular/core';
import {boxAnimate} from "../animations"
@Component({
  selector: 'app-exp1',
  templateUrl: './exp1.component.html',
  animations: [
    boxAnimate
  ]
})
export class Exp1Component implements OnInit {

  // 定义开始的状态
  private boxState: String = 'left';
  private _isTrue: Boolean = true;
  constructor() { }

  ngOnInit() {
  }
  start(): void {
    console.log('开始运动');
    if (this._isTrue) {
      this.boxState = 'right';
    } else {
      this.boxState = 'left';
    }
    this._isTrue = !this._isTrue;
  }

}
