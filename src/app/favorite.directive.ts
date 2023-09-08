import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[myFavorite]',
})
export class FavoriteDirective {
  @HostBinding('class.is-favorite-hovering') hovering = false;
  @HostBinding('class.is-favorite') isFavorite = true;
  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }
  @Input() set myFavorite(value: boolean) {
    this.isFavorite = value;
  }
}
