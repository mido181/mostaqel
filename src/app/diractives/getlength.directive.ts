import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGetlength]'
})
export class GetlengthDirective implements OnInit {

  mizo:string = '';
  constructor(private ele:ElementRef , host:HostListener ) {
    
  }
  ngOnInit(): void {

  }
  
 
  
}
