import { Directive, ElementRef, HostListener, OnInit } from "@angular/core";

@Directive({
  selector: "[appColor]",
})
export class ColorDirective {
  @HostListener("document:keydown", ["$event"]) private changeColor(event) {
    //console.log("event : ", event);
    //console.log(this.el.nativeElement);

    switch (event.key) {
      case "ArrowUp":
        this.el.nativeElement.style.color = "orange";
        break;
      case "ArrowDown":
        this.el.nativeElement.style.color = "blue";
        break;
      case "ArrowLeft":
        this.el.nativeElement.style.color = "green";
        break;
      case "ArrowRight":
        this.el.nativeElement.style.color = "purple";
        break;
    }
  }
  constructor(private el: ElementRef) {}
}
