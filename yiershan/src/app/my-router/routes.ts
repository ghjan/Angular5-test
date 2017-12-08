import {LayoutComponent} from "../layout/layout.component"
export const routes = [
  {
    path: 'app',
    component:LayoutComponent
  },
  {
    path: 'animations',
    loadChildren:'../my-animations/my-animations.module#MyAnimationsModule'
  },
  { path: '**', redirectTo: 'app' },
  { path: '', redirectTo: 'app',pathMatch: 'full' }
];
