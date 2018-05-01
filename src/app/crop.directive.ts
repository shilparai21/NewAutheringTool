import { Directive  , ElementRef} from '@angular/core';

@Directive({
  selector: '[appCrop]'
})
export class CropDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

}
