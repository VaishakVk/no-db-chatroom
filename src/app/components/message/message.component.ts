import { Component, Input } from '@angular/core';
import { constants } from 'src/app/Constants';
import { MessageModel } from 'src/app/model/message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  @Input() message: MessageModel;
  currentUser: string = constants.userName;
}
