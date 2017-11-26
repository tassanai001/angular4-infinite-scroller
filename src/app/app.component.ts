import { Component, OnInit } from '@angular/core';
import { PixabayServiceService } from './pixabay-service.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'app works!';
  currentPage = 1;
  imglist: Array<any> = [];
  scrollCallback;

  constructor(private pixabayService: PixabayServiceService) {
    this.scrollCallback = this.getStories.bind(this);
  }

  getStories() {
    return this.pixabayService.getImg(this.currentPage).map(val => {
      this.processData(val.json().hits);
      return val.json().hits;
    });
  }

  private processData = (imglist) => {
    this.currentPage++;
    this.imglist = this.imglist.concat(imglist);
  }

}
