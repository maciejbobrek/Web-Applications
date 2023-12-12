import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { ResetComponent } from './reset/reset.component';
import { PauseComponent } from './pause/pause.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    ResetComponent,
    PauseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
