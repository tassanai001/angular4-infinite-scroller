import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PixabayServiceService {

  private key = `2015507-d8ddd80b6e5d7a08d722fb487`;

  constructor(private http: Http) { }

  getImg(page = 1) {
    return this.http.get(`https://pixabay.com/api/?key=${this.key}&order=popular&per_page=100&image_type=photo&page=${page}`);
  }

}
