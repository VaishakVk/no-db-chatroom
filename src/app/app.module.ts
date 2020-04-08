import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { ChatRoomComponent } from './components/chatroom/chatroom.component';
import { HttpClientModule } from '@angular/common/http';
import { GiphyComponent } from './components/giphy/giphy.component';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './components/messages/messages.component';
import { MessageComponent } from './components/message/message.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { UsernamePipe } from './pipe/username.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChatRoomComponent,
    GiphyComponent,
    MessagesComponent,
    MessageComponent,
    HomeComponent,
    UsernamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
