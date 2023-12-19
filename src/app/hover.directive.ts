import { DOCUMENT } from '@angular/common';
import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  Renderer2,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective implements OnInit {
  // color: string = 'red';

  @Input() appHover: string = 'red';

  constructor(
    private element: ElementRef,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.appHover;
    //with documnet we can aces the entire page
    this.renderer.setStyle(
      this.element.nativeElement,
      'border',
      '2px solid black'
    );
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'green'
    );
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'red'
    );
  }
}
