import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appRainbow][type=text]'
})
export class RainbowDirective {
  @HostBinding('style.borderColor') bc = 'black';
  @HostBinding('style.color') color = 'black';
  constructor() {
    console.log('Making new instance of Rainbow directive');

  }

  @HostListener('keyup') onKeyUp() {
    this.bc = this.color = this.getRandomColor();
  }

  private getRandomColor(): string {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }

}
