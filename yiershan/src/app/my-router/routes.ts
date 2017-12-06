import {Exp1Component} from "../my-animations/exp1/exp1.component"

export const routes = [
  {
    path: 'animations',
    component: Exp1Component,
  },
  { path: '**', redirectTo: 'animations' },
  { path: '', redirectTo: 'animations',pathMatch: 'full' }
];
