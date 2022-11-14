import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing, appRoutinProviders } from './app.routing';
import { AppComponent } from './app.component';
import { MenuCollatzComponent } from './components/menu-collatz/menu-collatz.component';
import { CollatzComponent } from './components/collatz/collatz.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuCollatzComponent,
    CollatzComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutinProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
