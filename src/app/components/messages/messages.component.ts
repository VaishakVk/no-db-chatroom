import { Component, Input } from '@angular/core';
import { MessageModel } from 'src/app/model/message.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent {
  @Input() messages: MessageModel[];
}
