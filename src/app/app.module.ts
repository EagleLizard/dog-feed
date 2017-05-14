import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './nav/header/header.component';
import { PalsService } from './views/pals.service';

import {
  MdToolbarModule,
  MdSidenavModule,
  MdButtonModule,
  MdIconModule,
  MdCardModule
 } from '@angular/material';
import { DogFeedComponent } from './views/dog-feed/dog-feed.component';
import { PalsComponent } from './views/pals/pals.component';
import { PalCardComponent } from './views/pals/pal-card/pal-card.component';
import { PalAvatarComponent } from './views/pals/pal-card/pal-avatar/pal-avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DogFeedComponent,
    PalsComponent,
    PalCardComponent,
    PalAvatarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdSidenavModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule
  ],
  providers: [
    PalsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
