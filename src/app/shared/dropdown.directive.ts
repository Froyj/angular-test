import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') open: boolean = false;

  @HostListener('document:click', ['$event']) toggleOpen(eventData: Event) {
    this.open = this.elRef.nativeElement.contains(eventData.target) ?
      !this.open : false;
  }

  constructor(private elRef: ElementRef) { }
}