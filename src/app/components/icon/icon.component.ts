import { Component, Input } from '@angular/core';

@Component({
  selector: 'hg-icon',
  templateUrl: 'icon.component.html',
})
export class IconComponent {
  @Input() public icon: string = 'code';
}
