import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStickyNavbar]'
})
export class StickyNavbarDirective {

  constructor(private el:ElementRef, private render2:Renderer2) { 
  window.addEventListener('scroll',()=>{
    if(window.scrollY > 120){
    this.render2.setStyle(this.el.nativeElement,'height','0px')
    this.render2.setStyle(this.el.nativeElement,'overflow','hidden')
    } 
    if(window.scrollY > window.innerHeight){
    this.render2.setStyle(this.el.nativeElement,'overflow','auto')
      this.render2.setStyle(this.el.nativeElement,'height','80px')
      this.render2.addClass(this.el.nativeElement,'sticky-top')
      this.render2.removeClass(this.el.nativeElement,'position-absolute')

  } 

     if(window.scrollY < 120){
       this.render2.setStyle(this.el.nativeElement,'height','80px')  
       this.render2.addClass(this.el.nativeElement,'position-absolute')
       this.render2.removeClass(this.el.nativeElement,'sticky-top')
  
      } 

  
     
}
  
  )    
    


  }

}
