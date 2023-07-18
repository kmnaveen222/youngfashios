import { Directive,HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImagechange]'
})
export class ImagechangeDirective  {

  constructor(private el: ElementRef) { }
@HostListener('click')
imagechange(){
  var src:any=this.el.nativeElement.src;
  var prev:any=document.getElementById("preview");
  prev.src=src;

}
}
