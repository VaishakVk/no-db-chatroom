import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { constants } from '../Constants';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  socket: any;
  constructor() {
    this.socket = io(constants.wsUrl);
  }
  listen(event: string) {
    return new Observable((sub) => {
      this.socket.on(event, (data: any) => {
        sub.next(data);
      });
    });
  }

  emit(event, data) {
    this.socket.emit(event, data);
  }
}
