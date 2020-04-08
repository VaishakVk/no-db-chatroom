import { Component } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { constants } from 'src/app/Constants';
import {
  faPaperPlane,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { MessageModel } from 'src/app/model/message.model';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss'],
})
export class ChatRoomComponent {
  modal: boolean = false;
  faPaperPlane: IconDefinition = faPaperPlane;
  messages: MessageModel[] = [];
  currentMessage: string;
  constructor(private webSocketService: WebsocketService) {}

  ngOnInit(): void {
    this.webSocketService
      .listen('broadcastMessage')
      .subscribe((data: MessageModel) => {
        console.log('data received here', data);
        this.messages.push(data);
      });

    this.webSocketService.emit('sendMessage', {
      type: 'joined',
      userName: constants.userName,
    });
  }
  openModal(): void {
    this.modal = true;
  }

  closeModal(event?): void {
    if (!event) this.modal = false;
    else if (event.target.className === 'modal') this.modal = false;
  }
  openGiphy(): void {
    this.openModal();
  }

  sendMessage(): void {
    if (this.currentMessage)
      this.webSocketService.emit('sendMessage', {
        type: 'text',
        text: this.currentMessage,
        userName: constants.userName,
      });
    this.currentMessage = '';
  }
}
