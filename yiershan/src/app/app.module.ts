import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {MyRouterModule} from "./my-router/my-router.module"
import {MyAnimationsModule} from "./my-animations/my-animations.module";
import { LayoutComponent } from './layout/layout.component'

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MyAnimationsModule,
    MyRouterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
