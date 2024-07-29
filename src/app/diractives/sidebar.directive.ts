import { Directive,ElementRef,Input, Renderer2,OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appSidebar]'
})
export class SidebarDirective implements OnInit,OnChanges  {
@Input('appSidebar')
appSidebar = false
  constructor(private ele:ElementRef , private render:Renderer2) { }
  ngOnInit(){

    
  }
  ngOnChanges(){
    console.log(this.appSidebar);
    if (this.appSidebar) {
      this.render.addClass(this.ele.nativeElement,"sidebar") 
      this.render.removeClass(this.ele.nativeElement,"hide-sidebar") 
    }else{
      this.render.addClass(this.ele.nativeElement,"hide-sidebar") 
      this.render.removeClass(this.ele.nativeElement,"sidebar") 
    }

    
  }
}
