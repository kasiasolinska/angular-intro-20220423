
   
import {
  Directive,
  ElementRef,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  public ngOnInit() {
    const element: HTMLElement = this.elementRef.nativeElement;
    element.style.backgroundColor = '#f0f';
    element.style.fontSize = '32px';
  }
}
