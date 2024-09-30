import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[rowHoverHighlighter]' // Use this selector in your templates
})
export class RowHoverHighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('lightblue'); // Change color on hover
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(''); // Reset color on mouse leave
  }

  private highlight(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
