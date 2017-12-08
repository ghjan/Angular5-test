import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exp1Component } from './exp1/exp1.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { Exp2Component } from './exp2/exp2.component';
import { Exp3Component } from './exp3/exp3.component';


export const routes = [
  {
    path: 'animations',
    component:LayoutComponent,
    children:[
      { path: 'exp1',component:Exp1Component },
      { path: 'exp2',component:Exp2Component },
      { path: 'exp3',component:Exp3Component },
      { path: '', redirectTo: 'exp1', pathMatch: 'full' },
      { path: '**', redirectTo: 'exp1' },
    ]
  },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [Exp1Component, LayoutComponent, HeaderComponent, Exp2Component, Exp3Component]
})
export class MyAnimationsModule { }


