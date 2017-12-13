import { Component, OnInit } from '@angular/core';
import {boxAnimate2, KeyframesAnimate,GroupAnimate} from "../animations"
@Component({
  selector: 'app-exp2',
  templateUrl: './exp2.component.html',
  animations: [
    boxAnimate2,
    KeyframesAnimate,
    GroupAnimate
  ]
})
export class Exp2Component implements OnInit {
  // 状态
  private boxState='';
  //显示么
  private show= true;
  private num = 123;
  private Keyframes= true;
  private Group = true;
  constructor() { }

  ngOnInit() {
  }
  changState(state){
    this.boxState = state;
  }
  changShow(){
    this.show=!this.show;
  }
  add(f:boolean){
    const n = Math.round(Math.random()*100);
    this.num= f?this.num + n:this.num -n;
  }
  KeyframesShow(){
    this.Keyframes = !this.Keyframes;
  }
  GroupShow(){
    this.Group = !this.Group;
  }
  Callback(f:boolean){
    if(f){
      console.log("动画开始");
    }else {
      console.log("动画结束");
    }
  }
}
