import { Component, OnInit } from '@angular/core';
import {QueryAnimate} from "../animations"
@Component({
  selector: 'app-exp3',
  templateUrl: './exp3.component.html',
  styleUrls: ['./exp3.component.css'],
  animations: [
    QueryAnimate
  ]
})
export class Exp3Component implements OnInit {
  private State = '';
  constructor() { }

  ngOnInit() {
  }
  Change(){
    this.State=this.State=='on'?'off':'on';
  }
}
