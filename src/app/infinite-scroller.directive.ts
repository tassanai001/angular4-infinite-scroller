import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/startWith';

@Directive({
  selector: '[appInfiniteScroller]'
})

export class InfiniteScrollerDirective implements AfterViewInit {

  @Input()
  scrollCallback;

  private scrollEvent$;
  private userScrolledDown$;
  private requestOnScroll$;
  constructor(private elm: ElementRef) { }
  
  ngAfterViewInit(): void {
    const scroll = Observable.fromEvent(document, 'scroll');
    const currentScope = this;
    if (window.scrollY === 0) {
      console.log('---: Init :---');
      currentScope.requestCallbackOnScroll();
    }
    scroll.subscribe(function (e) {
      console.log(':---> ', Number(window.innerHeight + window.scrollY) - 15, ':::::', Number(document.body.scrollHeight));
      if (Number(window.innerHeight + window.scrollY) - 15 === document.body.scrollHeight) {
        console.log('---: bottom :---');
        currentScope.requestCallbackOnScroll();
      }
    });
  }

  private requestCallbackOnScroll() {
    this.scrollCallback().subscribe((data) => {
      console.log(data);
    }, (err) => {
      console.log(err);
    });
  }
}
