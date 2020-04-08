export interface MessageModel {
  type: MessageType;
  text?: string;
  userName: string;
  src?: string;
}

export enum MessageType {
  image = 'image',
  text = 'text',
  joined = 'joined',
}
