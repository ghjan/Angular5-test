import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {routes} from "./routes";

@NgModule({
  imports: [
    CommonModule,
    // 这个定义在子模块中，但是是跟路由，我们使用forRoot
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  declarations: []
})
export class MyRouterModule { }
