import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: '[myIcon]' // use this selector in html
})
export class IconProvider{
  @Input() set type(value:string){
    this.updateIcon(value);
  }

  private iconsMap:{[key:string]:any} = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️'
  };

  constructor(private el:ElementRef,private renderer:Renderer2){

  }
  updateIcon(iconType:string){
    const icon = this.iconsMap[iconType];
    this.renderer.setProperty(this.el.nativeElement, 'textContent',icon);
  }
}
