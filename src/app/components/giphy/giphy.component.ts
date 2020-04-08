import { Component, Output, EventEmitter } from '@angular/core';
import { GiphyService } from '../../services/giphy.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { constants } from 'src/app/Constants';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.scss'],
})
export class GiphyComponent {
  constructor(
    private giphyService: GiphyService,
    private websocketService: WebsocketService
  ) {}
  giphs: Record<string, any>;
  searchString: string;
  @Output() close: EventEmitter<void> = new EventEmitter();
  ngOnInit(): void {
    this.getGifs();
  }

  getGifs(): void {
    this.giphyService.getGIFS(this.searchString).subscribe((res) => {
      this.giphs = res['data'];
    });
  }

  imgClicked(url): void {
    // console.log('Clicked', url);
    this.websocketService.emit('sendMessage', {
      type: 'image',
      src: url,
      userName: constants.userName,
    });
    this.close.emit();
  }
}
