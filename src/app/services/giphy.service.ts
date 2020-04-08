import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { constants } from 'src/app/Constants';

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
  constructor(private http: HttpClient) {}
  getGIFS(searchString?: string) {
    let url;
    if (!searchString)
      url = `${constants.apiUrl}/trending?api_key=${constants.apiKey}`;
    else
      url = `${constants.apiUrl}/search?api_key=${constants.apiKey}&q=${searchString}`;

    return this.http.get(url);
  }
}
