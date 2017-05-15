import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './nav/header/header.component';

//services
import { PalsService } from './views/pals.service';
import { DogFeedService } from './views/dog-feed/dog-feed.service';

import {
  MdToolbarModule,
  MdSidenavModule,
  MdButtonModule,
  MdIconModule,
  MdCardModule,
  MdInputModule
 } from '@angular/material';
import { DogFeedComponent } from './views/dog-feed/dog-feed.component';
import { PalsComponent } from './views/pals/pals.component';
import { PalCardComponent } from './views/pals/pal-card/pal-card.component';
import { PalAvatarComponent } from './views/pals/pal-card/pal-avatar/pal-avatar.component';
import { FeedItemComponent } from './views/dog-feed/feed-item/feed-item.component';
import { FeedInputComponent } from './views/dog-feed/feed-input/feed-input.component';
import { FeedReactionsComponent } from './views/dog-feed/feed-item/feed-reactions/feed-reactions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DogFeedComponent,
    PalsComponent,
    PalCardComponent,
    PalAvatarComponent,
    FeedItemComponent,
    FeedInputComponent,
    FeedReactionsComponent
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
    MdCardModule,
    MdInputModule
  ],
  providers: [
    PalsService,
    DogFeedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
